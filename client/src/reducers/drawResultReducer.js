import {  EMPLOYEE_DRAW } from "../constants/action-types";

const initialState = {};
export default function drawResultReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_DRAW:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
}
