export const loadAction = data => async dispatch => {
  dispatch({
    type: "LOAD_ACTION",
    payload: data
  });
};
