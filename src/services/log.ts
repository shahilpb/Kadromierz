/**
 * @file log service
 * @author Peerbits
 */

import { TransformableInfo } from 'logform';
import { createLogger, format, transports } from 'winston';

import { config } from '../config';

const myFormat = format.printf(
  ({ level, message, timestamp }: TransformableInfo) => {
    return `[${level}][${timestamp}] ${message}`;
  }
);

const logger = createLogger({
  level: config.LOG_LEVEL,
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: 'YYYY-MM-DD:HH:mm:ss.SSS' }),
        format.simple(),
        myFormat
      )
    })
  ]
});

export const log = {
  debug(...msg: unknown[]) {
    logger.debug(toString(msg));
  },

  info(...msg: unknown[]) {
    logger.info(toString(msg));
  },

  warn(...msg: unknown[]) {
    logger.warn(toString(msg));
  },

  error(...msg: unknown[]) {
    logger.error(toString(msg));
  }
};

function toString(msg: unknown): string {
  switch (typeof msg) {
    case 'string': {
      return msg;
    }
    case 'object': {
      if (Array.isArray(msg)) {
        return msg.reduce(
          (str, item, index) =>
            `${str}${index === 0 ? '' : ' '}${toString(item)}`,
          ''
        );
      } else {
        return JSON.stringify(msg, null, 2);
      }
    }
    default: {
      return `${msg}`;
    }
  }
}
