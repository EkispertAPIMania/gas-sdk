export interface EkispertErrorMessage {
  text: string;
}

export interface EkispertErrorResponse {
  code: string;
  Message: EkispertErrorMessage[] | string;
}

export interface EkispertResponse {
  ResultSet: {
    apiVersion?: string;
    engineVersion?: string;
    Error?: EkispertErrorResponse;
  }
}
