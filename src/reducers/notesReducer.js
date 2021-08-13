import {
  ADD_NOTE,
  DELETE_NOTE,
  LOAD_NOTES,
  LOGOUT_CLEAN,
  SET_NOTE,
  UPDATE_NOTE,
} from "../types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  notes: [],
  active: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTE:
      return {
        ...state,
        active: action.payload,
      };
    case LOAD_NOTES:
      return {
        ...state,
        notes: [...action.payload],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case LOGOUT_CLEAN:
      return {
        active: null,
        notes: [],
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    default:
      return state;
  }
};
