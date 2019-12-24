declare module 'koa-mount' {
  import { Middleware } from 'koa';

  function mount<T>(app: Middleware<T>): Middleware<T>;

  function mount<T>(prefix: string, app: Middleware<T>): Middleware<T>;

  namespace mount {}

  export = mount;
}
