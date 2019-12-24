

export const asyncApiStateToProps = state => {
  return { apiState: state.apiReducer };
};


export const employeeListStateToProps = state => {
  return { employeeList: state.employeeListReducer };
}

export const appMapStateToProps = (data, state) => {
  let tempObj = {};
  // return state => {
  data.map(d => {
    let reducerObj = d(state);
    Object.keys(reducerObj).map(key => (tempObj[key] = reducerObj[key]));
  });
  return tempObj;
  // };
};
