/**
 * @file Employee Services
 */

import { forEach } from 'p-iteration';

import { EmployeeDetail } from '../emplyee.interface';
import employeeDetail from '../models/employee';
import { IEmployee } from '../models/employee';

/**
 * Get Employee List Query
 */
export const CreateEmployee = async (
  employeequery: EmployeeDetail
): Promise<IEmployee> => {
  const employeeQuery: any = {};
  employeeQuery.employee_id = employeequery.employee_id;
  employeeQuery.employee_name = employeequery.employee_name;
  employeeQuery.employee_position = employeequery.employee_position;
  employeeQuery.image = employeequery.image;
  employeeQuery.is_active = true;
  employeeQuery.is_deleted = false;
  employeeQuery.i_by = 1;
  employeeQuery.u_by = 1;
  const employeeDetails: IEmployee = await employeeDetail.create(employeeQuery);
  return employeeDetails;
};

/**
 * Get Employee List Query
 * Get Only Activated Users
 */
export const EmployeeList = async (): Promise<IEmployee[]> => {
  const employeeQuery: any = {};
  employeeQuery.is_active = true;
  employeeQuery.is_deleted = false;
  const employeeDetails: IEmployee[] = await employeeDetail.find(employeeQuery);
  return employeeDetails;
};

/**
 * Get Employee Details
 */
export const EmployeeDetails = async (): Promise<IEmployee | null> => {
  const employeeQuery: any = {};
  employeeQuery.is_active = true;
  employeeQuery.is_deleted = false;
  const employeeDetails: IEmployee | null = await employeeDetail.findOne(
    employeeQuery
  );
  return employeeDetails;
};

/**
 * Get Employee Detail by Employee ID
 */
export const EmployeeDetailsById = async (
  Id: string
): Promise<IEmployee | null> => {
  const employeeQuery: any = {};
  employeeQuery.is_active = true;
  employeeQuery.is_deleted = false;
  employeeQuery.employee_id = Id;
  const employeeDetails: IEmployee | null = await employeeDetail.findOne(
    employeeQuery
  );
  return employeeDetails;
};

/**
 * Employee Details By Dynamic Query
 */
export const EmployesDetails = async (
  employeeQuery: any
): Promise<IEmployee[]> => {
  employeeQuery.is_active = true;
  employeeQuery.is_deleted = false;
  const employeeDetails: IEmployee[] = await employeeDetail.find(employeeQuery);
  return employeeDetails;
};

/**
 * Compare All user with one User Service
 */
export const compareEmployees = async (
  id: string
): Promise<EmployeeDetail[][]> => {
  const employeeDetails: IEmployee | null = await EmployeeDetailsById(id);
  const employee_list: EmployeeDetail[][] = [];
  if (employeeDetails) {
    const employeeQuery: any = {
      employee_position: { $ne: employeeDetails.employee_position },
      employee_name: { $ne: employeeDetails.employee_name },
      employee_id: { $ne: employeeDetails.employee_id }
    };
    const employesDetails: IEmployee[] = await EmployesDetails(employeeQuery);

    await forEach(employesDetails, (emp: IEmployee) => {
      employee_list.push([
        {
          employee_id: emp.employee_id,
          employee_name: emp.employee_name,
          employee_position: emp.employee_position,
          image: emp.image
        },
        {
          employee_id:
            employeeDetails && employeeDetails.employee_id
              ? employeeDetails.employee_id
              : '',
          employee_name:
            employeeDetails && employeeDetails.employee_name
              ? employeeDetails.employee_name
              : '',
          employee_position:
            employeeDetails && employeeDetails.employee_position
              ? employeeDetails.employee_position
              : '',
          image:
            employeeDetails && employeeDetails.image
              ? employeeDetails.image
              : ''
        }
      ]);
    });
    return employee_list;
  } else {
    return employee_list;
  }
};
