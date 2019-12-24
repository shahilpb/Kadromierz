declare module '@koa/cors' {
  import * as Koa from 'koa';

  function koaCors<T>(options?: koaCors.IOptions): Koa.Middleware<T>;

  export = koaCors;

  namespace koaCors {
    interface IOptions {
      origin?: boolean | string | ((request: Request) => string);
      allowMethods?: string | ReadonlyArray<string>;
      exposeHeaders?: string | ReadonlyArray<string>;
      allowHeaders?: string | ReadonlyArray<string>;
      maxAge?: number;
      credentials?: true;
      keepHeadersOnError?: true;
    }
  }
}
