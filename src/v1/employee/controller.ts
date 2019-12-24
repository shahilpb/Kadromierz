/**
 * @file Empolyee Detail's
 * @author Peerbits
 */

import joi from '@hapi/joi';
import { Context, IBodyContext } from 'koa';

import { codes } from '../../cores/codes';
import { Util } from '../../services/util.service';
import { validate } from '../../v1/middlewares/validate';
import { get, IParamsContext, post } from '../middlewares';

import { EmployeeDetail } from './emplyee.interface';
import {
  compareEmployees,
  CreateEmployee,
  EmployeeDetails,
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
interface IGetEmplyeeList extends Context {}
export const getEmployeeList = () =>
  get('/list', async (ctx: IGetEmplyeeList) => {
    const util: Util = new Util();
    const employeeListist: IEmployee[] = await EmployeeList();
    if (employeeListist.length < 0) {
      util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
    } else {
      util.ReS(ctx, 'Employee List', employeeListist, codes.Ok);
    }
  });

/**
 * @description Get Employee Details
 */
interface IGetEmplyeeDetail extends Context {}
export const getEmployeeDetail = () =>
  get('/details', async (ctx: IGetEmplyeeDetail) => {
    const util: Util = new Util();
    const employeeDetails: IEmployee | null = await EmployeeDetails();
    if (employeeDetails == null) {
      util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
    } else {
      util.ReS(ctx, 'Employee List', employeeDetails, codes.Ok);
    }
  });

/**
 * @description Get Employee Details
 */
interface IGetEmplyeeCompareDetail extends Context<IParamsContext<'id'>> {}
export const getEmployeeCompareDetails = () =>
  get(
    '/comparedetails/:id',
    validate.params({
      id: joi.string().required()
    }),
    async (ctx: IGetEmplyeeCompareDetail) => {
      const util: Util = new Util();
      const id = ctx.request.params.id;
      const employeeDetailsById: IEmployee | null = await EmployeeDetailsById(
        id
      );
      const employeeList: any = await compareEmployees(id);
      if (employeeList && employeeDetailsById == null) {
        util.ReE(ctx, 'No Data Found', codes['Not Found'], 'No Data Found');
      } else {
        util.ReS(ctx, 'Compare Details', employeeList, codes.Ok);
      }
    }
  );
