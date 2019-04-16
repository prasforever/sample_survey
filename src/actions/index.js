import { ADD_QUESTION } from "./types";

export const addQuestion = data => async dispatch => {
  dispatch({ type: ADD_QUESTION, payload: data });
};
