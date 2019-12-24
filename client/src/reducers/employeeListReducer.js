import {  GET_EMPLOYEE_LIST } from "../constants/action-types";

const initialState = {};
export default function employeeListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEE_LIST:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
}
