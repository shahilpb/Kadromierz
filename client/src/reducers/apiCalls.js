import { SUCCESS, FAILURE, STARTED, DELETE } from "../constants/action-types";

const initialState = {
  loading: false,
  todos: [],
  error: null
};
export default function apiReducer(state = initialState, action) {
  //console.log("action", action);
  switch (action.type) {
    case STARTED:
      return {
        ...state,
        loading: true
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DELETE:
      return initialState;
    default:
      return state;
  }
}
