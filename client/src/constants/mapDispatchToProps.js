import {  asyncApi,  deleteApiState,  } from "../action";
import { getEmployeeList } from "../action";


export const asyncApiDispatchToProps = dispatch => {
  return {
    apiCall: (
      endPoint,
      params,
      successMethod,
      errorMethod,
      method = "post",
      config
    ) => {
      dispatch(
        asyncApi(endPoint, params, successMethod, errorMethod, method, config)
      );
    },
    deleteApiState: () => dispatch(deleteApiState())
  };
};



export const appMapDispatchToProps = data => {
  // debugger
  let tempObj = {};
  return dispatch => {
    data.map(d => {
      const m = d(dispatch);
      Object.keys(m).map(key => (tempObj[key] = m[key]));
      console.log(m, Object.keys(m));
      console.log(tempObj);
    });
    return tempObj;
  };
};

export const employeeDispatchToProps = dispatch => {
  return {
    getEmployeeList: data => dispatch(getEmployeeList(data)),
  };
};
