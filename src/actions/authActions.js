import { FINISH_LOADING, LOGIN, LOGOUT, START_LOADING } from "../types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { setError } from "./uiActions";
import toast from "react-hot-toast";
import { noteLogout } from "./notesActions";
export const startLoginEmailPassword = (email, password) => (dispatch) => {
  dispatch(startLoading());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    })
    .catch((err) => {
      dispatch(setError(err.message));
      toast.error(err.message);
    });
};

export const startGoogleLogin = () => (dispatch) => {
  dispatch(startLoading());
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    })
    .catch((err) => {
      dispatch(setError(err.message));
      toast.error(err.message);
    });
};

export const startRegisterWithEmailPassword =
  (email, password, name) => (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(setError(err.message));
        toast.error(err.message);
      });
  };

export const login = (uid, displayName) => ({
  type: LOGIN,
  payload: {
    uid,
    displayName,
  },
});
export const startLogout = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch(logout());
  dispatch(noteLogout());
};
export const logout = () => ({
  type: LOGOUT,
});

export const startLoading = () => ({
  type: START_LOADING,
});
export const finishLoading = () => ({
  type: FINISH_LOADING,
});
