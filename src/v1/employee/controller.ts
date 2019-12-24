/**
 * @file Empolyee Detail's
 * @author Peerbits
 */

import Joi from '@hapi/joi';
import { Context, IBodyContext, IQueryContext } from 'koa';

import { codes } from '../../cores/codes';
import { Util } from '../../services/util.service';
import { validate } from '../../v1/middlewares/validate';
import { get, post } from '../middlewares';

import { EmployeeDetail } from './emplyee.interface';
import {
  CreateEmployee,
  EmployeeDetailsById,
  EmployeeList
} from './middelwares/service';
import { IEmployee } from './models/employee';

/**
 * @function
 * @description Get Employee list
 */
interface ICreateEmplyee extends Context<IBodyContext<EmployeeDetail>> {}
export const createEmployee = () =>
  post('/create', async (ctx: ICreateEmplyee) => {
    const util: Util = new Util();
    const body = ctx.request.body;
    const employee: IEmployee = await CreateEmployee(body);
    if (employee) {
      util.ReS(ctx, 'Employee List', employee, codes.Ok);
    } else {
      util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
    }
  });

/**
 * @description Get Employee list
 */
interface IGetEmplyeeListContext
  extends Context<
    IQueryContext<{
      start: number;
      end: number;
    }>
  > {}
export const getEmployeeList = () =>
  get(
    '/list',
    validate.query({
      start: Joi.number()
        .integer()
        .min(0)
        .default(0),
      end: Joi.number()
        .integer()
        .min(1)
        .default(20)
    }),
    async (ctx: IGetEmplyeeListContext) => {
      const util: Util = new Util();
      const employeeListist: IEmployee[] = await EmployeeList();
      if (employeeListist.length < 0) {
        util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
      } else {
        util.ReS(
          ctx,
          'Employee List',
          { is_last: 1, employees: employeeListist },
          codes.Ok
        );
      }
    }
  );

/**
 * @description Get Employee Details
 */
interface IGetEmplyeeDetail extends Context {}
export const getEmployeeDetail = () =>
  get('/details', async (ctx: IGetEmplyeeDetail) => {
    const util: Util = new Util();
    const employeeDetails: IEmployee | null = await EmployeeDetailsById('1');
    if (employeeDetails == null) {
      util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
    } else {
      util.ReS(ctx, 'Employee List', employeeDetails, codes.Ok);
    }
  });
