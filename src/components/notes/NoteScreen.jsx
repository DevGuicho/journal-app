import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notesActions";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInput, reset] = useForm(note);
  const { body, title, id } = formValues;

  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset();
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <form className="notes__content">
        <input
          type="text"
          name="title"
          id=""
          autoComplete="off"
          placeholder="Some awesome title"
          className="notes__title-input"
          onChange={handleInput}
          value={title}
        />
        <textarea
          name="body"
          id=""
          placeholder="What happen today"
          className="notes__textarea"
          onChange={handleInput}
          value={body}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        )}
      </form>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
