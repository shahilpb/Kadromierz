

export const asyncApiStateToProps = state => {
  return { apiState: state.apiReducer };
};


export const employeeListStateToProps = state => {
  return { employeeList: state.employeeListReducer };
}

export const employeeDrawStateToProps = state => {
  return { drawResult: state.drawResultReducer };
}

export const appMapStateToProps = (data, state) => {
  let tempObj = {};
  data.map(d => {
    let reducerObj = d(state);
    Object.keys(reducerObj).map(key => (tempObj[key] = reducerObj[key]));
  });
  return tempObj;
};
