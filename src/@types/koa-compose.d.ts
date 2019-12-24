declare module 'koa-compose' {
  import { Context, Middleware } from 'koa';

  function compose<T>(middleware: Array<Middleware<T>>): Middleware<T>;

  export = compose;
}
