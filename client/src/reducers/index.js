import { combineReducers } from "redux";

import apiReducer from "./apiCalls";
import employeeListReducer from "./employeeListReducer";
import drawResultReducer from "./drawResultReducer";


// Combine all reducers as root reducer
export default combineReducers({employeeListReducer,drawResultReducer,
  apiReducer,
}); 