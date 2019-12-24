/**
 * @file Employee Services
 */

import { Employee, EmployeeDocument, IEmployee } from '../models';

/**
 * Get Employee List Query
 */
export const CreateEmployee = async (
  details: IEmployee
): Promise<IEmployee> => {
  const employeeQuery: IEmployee = {
    name: details.name,
    number: details.number,
    position: details.position,
    image: details.image ?? null,
    dob: details.dob ?? null
  };

  return await Employee.create(employeeQuery);
};

/**
 * Get Employee List Query
 * Get Only Activated Users
 */
export const EmployeeList = async (): Promise<EmployeeDocument[]> => {
  return await Employee.find().exec();
};

/**
 * Get Employee Detail by Employee ID
 */
export const EmployeeDetailsById = async (
  id: string
): Promise<EmployeeDocument | null> => {
  return await Employee.findById(id).exec();
};
