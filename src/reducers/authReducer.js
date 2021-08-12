import { LOGIN, LOGOUT } from "../types";

/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
