import {EMPLOYEE_DRAW } from "../constants/action-types";

export const getDrawResult = data => ({
  type: EMPLOYEE_DRAW,
  payload: data
});
