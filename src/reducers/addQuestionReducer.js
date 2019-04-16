import { ADD_QUESTION } from "../actions/types";

const addQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

export default addQuestionReducer;
