import Joi from '@hapi/joi';
import { Middleware } from 'koa';

import * as errors from '../errors';

export const validate = {
  /**
   * Body validation middleware.
   */
  body: validateRequestProp('body', errors.RequestBodyValidationError),

  /**
   * Query validation middleware.
   */
  query: validateRequestProp('query', errors.RequestQueryValidationError),

  /**
   * Params validation middleware.
   */
  params: validateRequestProp('params', errors.RequestParamsValidationError)
};

type IErrorConstructor = new (
  message: string,
  property: string
) => errors.BaseError;

function validateRequestProp(
  prop: 'body' | 'query' | 'params',
  ErrorConstructor: IErrorConstructor
) {
  return <T>(schema: Joi.SchemaLike): Middleware<T> => {
    const compiledSchema = Joi.compile(schema);
    return async function validateRequestPropInner(ctx, next) {
      try {
        // assign to request's body because Joi.validate might transform values
        ctx.request[prop] = compiledSchema.validate(ctx.request[prop]);
      } catch (error) {
        const [detail] = error.details;
        const message = detail.context.message || detail.message;
        throw new ErrorConstructor(message, detail.context.label);
      }
      await next();
    };
  };
}
