import {GET_EMPLOYEE_LIST } from "../constants/action-types";

export const getEmployeeList = data => ({
  type: GET_EMPLOYEE_LIST,
  payload: data
});
