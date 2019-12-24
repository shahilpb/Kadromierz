/**
 * @file base errors
 * @copyright peerbits
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

/**
 * Base class for errors.
 */
export abstract class BaseError extends Error {
  public abstract status: number;
  public abstract code: string;
  public abstract message: string;

  /**
   * Returns representation of error to be sent to the client.
   */
  public toJSON(this: BaseError) {
    const { code, message } = this;
    return { error: { code, message } };
  }
}

/**
 * Base class for client errors (4xx).
 * Use when the client was responsible for the error.
 */
export abstract class ClientError extends BaseError {
  public status = 400;
}

/**
 * Base class for server errors (5xx).
 * Use when the developer was responsible for the error.
 */
export abstract class ServerError extends BaseError {
  public status = 500;
}

/**
 * Customer server error.
 * Use if a custom message should be send to frontend when a server error occurred.
 * Only use throw on endpoint that required a super admin.
 */
export class CustomServerError extends ServerError {
  constructor(public message: string, public code = 'custom_server_error') {
    super();
  }
}

/**
 * Internal server error.
 * Use if there is no more specific error.
 */
export class InternalError extends ServerError {
  public code = 'internal_error';
  public message = 'Request cannot be processed due to an internal error';
}

/**
 * Not implemented error.
 * Use if a particular functionality was left unimplemented.
 */
export class NotImplementedError extends ServerError {
  public status = 501;
  public code = 'not_implemented_error';
  public message = 'The endpoint has not been implemented yet';
}

/**
 * Internal database error.
 * Use if there was an unexpected database error.
 */
export class InternalDatabaseError extends ServerError {
  public code = 'internal_database_error';
  public message =
    'Request cannot be processed due to an internal database error';
}

/**
 * Unauthorized user error.
 * Use if the request is not authorized to perform a protected action.
 */
export class UnauthorizedUserError extends ClientError {
  public status = 401;
  public code = 'unauthorized_user_error';
  public message = 'User is not authorized to access the resource';
}

/**
 * Missing access token.
 * Use if not access token was provided in a request.
 */
export class MissingAccessTokenError extends ClientError {
  public status = 401;
  public code = 'missing_access_token_error';
  public message = 'Not access token was provided in request.';
}

/**
 * Session expired error.
 * Use if the session has expired.
 */
export class SessionExpiredUserError extends ClientError {
  public status = 401;
  public code = 'session_expired_error';
  public message = 'The session expired.';
}

/**
 * Forbidden access error.
 * Use if an authenticated user is not authorized to perform a protected action.
 */
export class ForbiddenAccessError extends ClientError {
  public status = 403;
  public code = 'forbidden_access_error';
  public message = 'User is not authorized to perform this action';
}

/**
 * Email exist error.
 * Use if the provided email already exists.
 */
export class EmailExistsError extends ClientError {
  public code = 'email_exists_error';
  public message = 'Provided Email already exists';
}

/**
 * Account Type error.
 * Use if the request is not authorized to insert the series / Single event.
 */
export class AccountTypeError extends ClientError {
  public status = 403;
  public code = 'accounttype_invalid_error';
  public message = 'Account Type not valid to perform this action';
}

/**
 * Bad Request already exists
 * Use if the request is not correct.
 */
export class BadRequestError extends ClientError {
  public status = 400;
  public code = 'bad_request_error';
  public message = 'Bad Request , Request Parameter not correct';
}

/**
 * Password missmatch error.
 * Use if the provided password does not match the actual password.
 */
export class PasswordMissmatchError extends ClientError {
  public code = 'password_missmatch_error';
  public message = 'Provided password does not match';
}

/**
 * User not found error.
 * Use if request references a user which does not exist.
 */
export class UserNotFoundError extends ClientError {
  public status = 404;
  public code = 'user_not_found_error';
  public message = 'User not found with given id';
}

/**
 * Request body validation error.
 * Use if request body does not pass validation.
 */
export class RequestBodyValidationError extends ClientError {
  public code: string;
  public constructor(public message: string, fieldName: string) {
    super();
    this.code = `${codifyFieldName(fieldName)}_request_body_validation_error`;
  }
}

/**
 * Request query validation error.
 * Use if request query does not pass validation.
 */
export class RequestQueryValidationError extends ClientError {
  public code: string;
  public constructor(public message: string, fieldName: string) {
    super();
    this.code = `${codifyFieldName(fieldName)}_request_query_validation_error`;
  }
}

/**
 * Request params validation error.
 * Use if request params does not pass validation.
 */
export class RequestParamsValidationError extends ClientError {
  public code: string;
  public constructor(public message: string, fieldName: string) {
    super();
    this.code = `${codifyFieldName(fieldName)}_request_params_validation_error`;
  }
}

function codifyFieldName(fieldName: string) {
  return fieldName
    .split('')
    .map(s => (s.toUpperCase() === s ? '_' + s.toLowerCase() : s))
    .join('');
}

/**
 * Invalid formdata file field error.
 * Use if a form data field in not a file field.
 */
export class InvalidFormdataFileFieldError extends ClientError {
  public code = 'invalid_formdata_file_field_error';
  public message: string;
  public constructor(fieldName: string) {
    super();
    this.message = `The provided form data field "${fieldName}" is not a valid field for file upload`;
  }
}

/**
 * Formdata error.
 * Use if an error has occured while proccessing a formdata field.
 */
export class FormdataError extends ClientError {
  public code = 'formdata_error';
  public constructor(public message: string) {
    super();
  }
}
