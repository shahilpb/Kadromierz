/**
 * @file V1 index(Main File - EntryPoint)
 * @author  Peerbits
 */

import compose from 'koa-compose';
import mount from 'koa-mount';

import { employee } from './employee/routes';

export const v1 = () => compose([mount('/employee', employee())]);
