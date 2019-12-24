/**
 * @file Employee List Routes
 */

import compose from 'koa-compose';

import {
  createEmployee,
  getEmployeeDetail,
  getEmployeeList,
  getRandomEmployeeDetail
} from './controllers';

export const employee = () =>
  compose([
    getEmployeeList(),
    getRandomEmployeeDetail(),
    getEmployeeDetail(),
    createEmployee()
  ]);
