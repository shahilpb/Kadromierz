import { SUCCESS, FAILURE, STARTED, DELETE } from "../constants/action-types";
import api from "../constants/baseUrl";

export const asyncApi = (
  endPoint,
  params = {},
  successMethod = success,
  errorMethod = failure,
  method = "post",
  config
) => {
  //console.log(endPoint, params, successMethod, method);
  return dispatch => {
    dispatch(started());
    api(
      endPoint,
      params,
      data => dispatch(successMethod(data)),
      err => dispatch(errorMethod(err)),
      method,
      config
    );
  };
};
const success = todo => ({
  type: SUCCESS,
  payload: {
    ...todo
  }
});

const started = () => ({
  type: STARTED
});

const failure = error => ({
  type: FAILURE,
  payload: {
    error
  }
});

export const deleteApiState = () => ({
  type: DELETE
});
