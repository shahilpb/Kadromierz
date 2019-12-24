/**
 * @file Employee List Routes
 */

import compose from 'koa-compose';

import {
  createEmployee,
  getEmployeeCompareDetails,
  getEmployeeDetail,
  getEmployeeList
} from './controller';

export const employee = () =>
  compose([
    getEmployeeList(),
    getEmployeeDetail(),
    createEmployee(),
    getEmployeeCompareDetails()
  ]);
