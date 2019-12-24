/**
 * @file Empolyee Detail's
 * @author Peerbits
 */

import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';
import { Context, IBodyContext, IQueryContext } from 'koa';

import { Util } from '../../services/util.service';
import { get, post, validate } from '../middlewares';

import {
  CreateEmployee,
  EmployeeDetailsById,
  EmployeeList
} from './middelwares/service';
import { IEmployee } from './models';

/**
 * @function
 * @description Get Employee list
 */
interface ICreateEmplyee extends Context<IBodyContext<IEmployee>> {}
export const createEmployee = () =>
  post('/create', async (ctx: ICreateEmplyee) => {
    const util: Util = new Util();
    const body = ctx.request.body;
    const employee: IEmployee = await CreateEmployee(body);
    if (employee) {
      util.ReS(ctx, 'Employee List', employee, HttpStatus.OK);
    } else {
      util.ReE(ctx, 'No Data Found', HttpStatus.NOT_FOUND, 'No Data Found');
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
    '/',
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
      const { start, end } = ctx.request.query;
      const util: Util = new Util();
      const { data: employees, count } = await EmployeeList(
        parseInt(start.toString(), 10),
        parseInt(end.toString(), 10)
      );
      if (employees.length < 0) {
        util.ReE(ctx, 'No Data Found', HttpStatus.NOT_FOUND, 'No Data Found');
      } else {
        util.ReS(
          ctx,
          'Employee List',
          { is_last: end >= count, employees, count },
          HttpStatus.OK
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
      util.ReE(ctx, 'No Data Found', HttpStatus.NOT_FOUND, 'No Data Found');
    } else {
      util.ReS(ctx, 'Employee List', employeeDetails, HttpStatus.OK);
    }
  });
