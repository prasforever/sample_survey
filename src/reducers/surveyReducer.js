const surveyReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};

export default surveyReducer;
