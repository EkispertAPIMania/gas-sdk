import { Client } from "../client";
import EkispertError from "../error";
import type { EkispertResponse } from '../type/response';

export default class Base {
  protected readonly client: Client;
  readonly format: string;
  constructor(client: Client) {
    this.client = client;
    this.format = 'json';
  }

  addArrayParams(params: Record<string, string | number>, key: string, array: string[]) {
    if (array.length > 0) {
      params[key] = array.join(':');
    }
  }

  addBooleanParams(params: Record<string, string | number>, key: string, value: boolean | undefined) {
    if (typeof value === 'boolean') {
      params[key] = String(value);
    }
  }

  buildQuery(params: Record<string, string | number>) {
    const pairs = [];
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`);
      }
    }
    return pairs.join("&");
  }

  _execute<T>(path: string, params: Record<string, string | number>): T {
    params['key'] = this.client.apiKey;
    // Implementation of the execute method
    const url = `${this.client.baseUrl}/v1/json${path}?${this.buildQuery(params)}`;
    console.log({ url });
    const res = UrlFetchApp.fetch(url, {
      method: 'get',
      muteHttpExceptions: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = JSON.parse(res.getContentText()) as EkispertResponse;
    if (json.ResultSet.Error) {
      throw new EkispertError(json.ResultSet.Error.code, json.ResultSet.Error.Message);
    }
    delete json.ResultSet.apiVersion;
    delete json.ResultSet.engineVersion;
    return json.ResultSet as T;
  }
}