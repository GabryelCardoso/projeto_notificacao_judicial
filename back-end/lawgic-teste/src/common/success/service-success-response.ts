export class ServiceSuccessResponse {
  message: string;
  code: number;
  data?: any;
  constructor(message: string, code: number, data?: any) {
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
