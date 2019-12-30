import { IResponse } from 'koa';

/**
 * Handle response
 */
export class Response {
  public success = (
    response: IResponse,
    data: object,
    status: number = 200,
    error?: string
  ) => {
    response.body = {
      error,
      data,
      status,
      success: 1
    };
    response.status = status;
  };

  public error = (
    response: IResponse,
    message: string,
    status: number = 500,
    error?: string
  ) => {
    response.body = {
      error,
      data: {
        message
      },
      status,
      success: 0
    };
    response.status = status;
  };

  public Timestampconversion = (dateTime: Date | number) => {
    const date = new Date(dateTime);
    return date.getTime() / 1000;
  };
}
