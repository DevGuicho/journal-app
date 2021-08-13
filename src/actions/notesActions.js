import toast from "react-hot-toast";
import { db } from "../firebase/firebaseConfig";
import fileUpload from "../helpers/fileUpload";
import loadNotes from "../helpers/loadNotes";
import {
  ADD_NOTE,
  DELETE_NOTE,
  LOAD_NOTES,
  LOGOUT_CLEAN,
  SET_NOTE,
  UPDATE_NOTE,
} from "../types";

export const startNewNote = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const newNote = {
    title: "",
    body: "",
    date: new Date().getTime(),
  };

  const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
  dispatch(activeNote(docRef.id, newNote));
  dispatch(addNewNote(docRef.id, newNote));
};

export const startLoadingNotes = (uid) => async (dispatch) => {
  const notes = await loadNotes(uid);
  dispatch(setNotes(notes));
};

export const startSaveNote = (note) => async (dispatch, getState) => {
  const { uid } = getState().auth;
  if (!note.url) {
    delete note.url;
  }
  const noteToFirestore = { ...note };
  delete noteToFirestore.id;
  await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
  dispatch(updateNote(note.id, note));
  toast.success("Nota guardada");
};

export const startUploading = (file) => async (dispatch, getState) => {
  const { active: activeNote } = getState().notes;
  const fileUrl = await fileUpload(file);

  toast.success("File uploaded successful");
  dispatch(startSaveNote({ ...activeNote, url: fileUrl }));
};

export const startDeleting = (id) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  await db.doc(`${uid}/journal/notes/${id}`).delete();

  dispatch(deleteNote(id));
  toast.success("Nota borrada");
};

export const activeNote = (id, note) => ({
  type: SET_NOTE,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: ADD_NOTE,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: LOAD_NOTES,
  payload: notes,
});

export const updateNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: { id, note: { id, ...note } },
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const noteLogout = () => ({
  type: LOGOUT_CLEAN,
});
