/**
 * @file Empolyee controller
 * @copyright peerbits
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';
import { Context, IBodyContext, IQueryContext } from 'koa';

import { Response } from '../../services/response';
import { get, IParamsContext, post, validate } from '../middlewares';

import { IEmployee } from './models';
import {
  CreateEmployee,
  EmployeeDetailsById,
  EmployeeList,
  RandomEmployee
} from './service';

/**
 * @function
 * @description Get Employee list
 */
interface ICreateEmplyee extends Context<IBodyContext<IEmployee>> {}
export const createEmployee = () =>
  post('/', async (ctx: ICreateEmplyee) => {
    const response = new Response();
    const body = ctx.request.body;
    const employee: IEmployee = await CreateEmployee(body);
    if (employee) {
      response.success(ctx.response, employee, HttpStatus.OK);
    } else {
      response.error(
        ctx.response,
        'No Data Found',
        HttpStatus.NOT_FOUND,
        'No Data Found'
      );
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
      const response = new Response();
      const { data: employees, count } = await EmployeeList(
        parseInt(start.toString(), 10),
        parseInt(end.toString(), 10)
      );
      if (employees.length < 0) {
        response.error(
          ctx.response,
          'No Data Found',
          HttpStatus.NOT_FOUND,
          'No Data Found'
        );
      } else {
        response.success(
          ctx.response,
          { is_last: end >= count ? 1 : 0, employees, count },
          HttpStatus.OK
        );
      }
    }
  );

/**
 * @description Get Employee Details
 */
export const getRandomEmployeeDetail = () =>
  get('/random', async (ctx: Context) => {
    const response = new Response();
    const employee = await RandomEmployee();
    if (employee == null) {
      response.error(
        ctx.response,
        'No Data Found',
        HttpStatus.NOT_FOUND,
        'No Data Found'
      );
    } else {
      response.success(ctx.response, employee, HttpStatus.OK);
    }
  });

/**
 * @description Get Employee Details
 */
interface IGetEmplyeeDetailContext extends Context<IParamsContext<'id'>> {}
export const getEmployeeDetail = () =>
  get('/:id', async (ctx: IGetEmplyeeDetailContext) => {
    const { id } = ctx.request.params;
    const response = new Response();
    const employee = await EmployeeDetailsById(id);
    if (employee == null) {
      response.error(
        ctx.response,
        'No Data Found',
        HttpStatus.NOT_FOUND,
        'No Data Found'
      );
    } else {
      response.success(ctx.response, employee, HttpStatus.OK);
    }
  });
