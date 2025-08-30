import { InternalServerErrorException } from '@nestjs/common';

export class ServiceErrorException extends InternalServerErrorException {
  constructor(message: string, error?: any, data?: any) {
    super({
      message,
      details: error?.message,
      stack: error?.stack,
      data,
    });
  }
}
