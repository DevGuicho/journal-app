import { DELETE_ERROR, SET_ERROR } from "../types";

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const deleteError = () => ({
  type: DELETE_ERROR,
});
