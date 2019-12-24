import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import apiReducer from "./apiCalls";
import employeeListReducer from "./employeeListReducer";
// import uploadImageReducer from "./uploadImageReducer";
// import userProfileReducer from "./userReducer";

// Combine all reducers as root reducer
export default combineReducers({employeeListReducer,
  apiReducer,
}); //articles: articleReducer,
