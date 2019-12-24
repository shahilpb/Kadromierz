/**
 * @file Employee List Routes
 */

import compose from 'koa-compose';

import {
  createEmployee,
  getEmployeeDetail,
  getEmployeeList
} from './controller';

export const employee = () =>
  compose([getEmployeeList(), getEmployeeDetail(), createEmployee()]);
