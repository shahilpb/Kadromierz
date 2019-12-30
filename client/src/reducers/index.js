import { combineReducers } from "redux";
import apiReducer from "./apiCalls";
import employeeListReducer from "./employeeListReducer";


// Combine all reducers as root reducer
export default combineReducers({employeeListReducer,
  apiReducer,
}); 
