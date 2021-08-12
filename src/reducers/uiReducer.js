/* eslint-disable import/no-anonymous-default-export */

import {
  DELETE_ERROR,
  FINISH_LOADING,
  SET_ERROR,
  START_LOADING,
} from "../types";

const initialState = {
  isLoading: false,
  msgError: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        msgError: action.payload,
      };
    case DELETE_ERROR:
      return {
        ...state,
        msgError: null,
        isLoading: false,
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
