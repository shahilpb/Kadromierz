export class Util {
  constructor() {}

  public ReS = (
    res: any,
    message: string,
    data: { [k: string]: any },
    status?: Number,
    err?: string
  ): any => {
    const error: string[] = [];
    let code;
    if (err != undefined) {
      error.push(err);
    }
    if (status != undefined && status != null) {
      code = status;
    }

    data.message = message;

    res.response.body = {
      error,
      data,
      code,
      success: 1
    };
    res.response.status = code;
  };

  public ReE = (res: any, message: string, status?: Number, err?: string) => {
    const error: string[] = [];
    let code;

    if (err != undefined) {
      error.push(err);
    }
    if (status != undefined && status != null) {
      code = status;
    }

    res.response.body = {
      error,
      data: {
        message
      },
      code,
      success: 0
    };
    res.response.status = code;
  };

  public Timestampconversion = (dateTime: any) => {
    const date = new Date(dateTime);
    return date.getTime() / 1000;
  };
}
