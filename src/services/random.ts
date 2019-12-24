/**
 * @file random service
 * @copyright peerbits
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import crypto from 'crypto';

import { log } from './log';

export const cryptoRandomNumber = (minimum: number, maximum: number) => {
  const distance = maximum - minimum;

  if (minimum >= maximum) {
    log.warn('Minimum number should be less than maximum');
    return false;
  } else if (distance > 281474976710655) {
    log.warn(
      'You can not get all possible random numbers if range is greater than 256^6-1'
    );
    return false;
  } else if (maximum > Number.MAX_SAFE_INTEGER) {
    log.warn('Maximum number should be safe integer limit');
    return false;
  } else {
    let maxBytes = 6;
    let maxDec = 281474976710656;

    // To avoid huge mathematical operations and increase function performance for small ranges, you can uncomment following script
    if (distance < 256) {
      maxBytes = 1;
      maxDec = 256;
    } else if (distance < 65536) {
      maxBytes = 2;
      maxDec = 65536;
    } else if (distance < 16777216) {
      maxBytes = 3;
      maxDec = 16777216;
    } else if (distance < 4294967296) {
      maxBytes = 4;
      maxDec = 4294967296;
    } else if (distance < 1099511627776) {
      maxBytes = 4;
      maxDec = 1099511627776;
    }

    const randbytes = parseInt(
      crypto.randomBytes(maxBytes).toString('hex'),
      16
    );
    let result = Math.floor(
      (randbytes / maxDec) * (maximum - minimum + 1) + minimum
    );

    if (result > maximum) {
      result = maximum;
    }
    return result;
  }
};
