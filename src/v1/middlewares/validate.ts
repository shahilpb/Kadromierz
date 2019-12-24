/**
 * @file validation middleware
 * @copyright simplefox GmbH
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

import Joi from '@hapi/joi';
import { Middleware } from 'koa';

import {
  BaseError,
  RequestBodyValidationError,
  RequestParamsValidationError,
  RequestQueryValidationError
} from '../errors';

/**
 * Validation middleware.
 */
export interface IValidateMiddleware {
  /**
   * Body validation middleware.
   */
  body: <T>(schema: Joi.SchemaLike) => Middleware<T>;
  /**
   * Query validation middleware.
   */
  query: <T>(schema: Joi.SchemaLike) => Middleware<T>;
  /**
   * Params validation middleware.
   */
  params: <T>(schema: Joi.SchemaLike) => Middleware<T>;
}

/**
 * Builds the validation middleware.
 */
export const validate: IValidateMiddleware = {
  body: validateRequestProp('body', RequestBodyValidationError),
  query: validateRequestProp('query', RequestQueryValidationError),
  params: validateRequestProp('params', RequestParamsValidationError)
};

type IErrorConstructor = new (message: string, property: string) => BaseError;

function validateRequestProp(
  prop: 'body' | 'query' | 'params',
  ErrorConstructor: IErrorConstructor
) {
  return <T>(schema: Joi.SchemaLike): Middleware<T> => {
    const compiledSchema = Joi.compile(schema);
    return async function validateRequestPropInner(ctx, next) {
      try {
        // assign to request's body because Joi.validate might transform values
        ctx.request[prop] = await compiledSchema.validateAsync(
          ctx.request[prop]
        );
      } catch (error) {
        const [detail] = error.details;
        const message = detail.context.message ?? detail.message;
        throw new ErrorConstructor(message, detail.context.label);
      }
      await next();
    };
  };
}
