import { ADD_QUESTION } from "./types";

export const addQuestion = data => async dispatch => {
  console.log("actions data: ", data);

  dispatch({ type: ADD_QUESTION, payload: data });
};
