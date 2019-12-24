/**
 * @file route middleware
 * @copyright peerbits
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

import { Context, Middleware } from 'koa';
import compose from 'koa-compose';
import pathToRegexp, { Key } from 'path-to-regexp';

export const get = route('get');
export const post = route('post');
export const patch = route('patch');
export const put = route('put');
export const del = route('delete');

/**
 * Request Params context interface.
 * Adds params property to koa request.
 */
export interface IParamsContext<P extends string> {
  request: {
    params: Record<P, string>;
  };
}

function route(method: string) {
  method = method.toUpperCase();

  return <T>(
    path: string,
    ...middlewares: Array<Middleware<T>>
  ): Middleware => {
    const middleware = compose(middlewares);
    const keys: Key[] = [];
    const re = pathToRegexp(path, keys);

    return async function routeInner(ctx, next) {
      if (!matches(ctx, method)) {
        await next();
        return;
      }
      const m = re.exec(ctx.request.path);
      if (!m) {
        await next();
        return;
      }
      let params = ctx.request.params ?? {};
      let key: string | number;
      let val: string;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i].name;
        val = decodeURIComponent(m[i + 1]);
        params = { ...params, [key]: val };
      }
      ctx.request.params = params;

      await middleware.call(ctx as Context<T>, ctx as Context<T>, next);
    };
  };
}

function matches(ctx: Context, method: string): boolean {
  if (ctx.request.method === method) {
    return true;
  }
  if (method === 'GET' && ctx.request.method === 'HEAD') {
    return true;
  }
  return false;
}
