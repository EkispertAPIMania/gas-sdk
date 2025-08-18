import type { EkispertErrorMessage } from './type/response'

export default class EkispertError extends Error {
  constructor(public code: string, public messages: EkispertErrorMessage[] | string) {
    if (typeof messages === "string") {
      super(messages);
    } else {
      super(messages.map(m => m.text).join(", "));
    }
    this.code = code;
    this.name = "EkispertError";
  }
}
