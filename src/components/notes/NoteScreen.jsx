import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <form className="notes__content">
        <input
          type="text"
          name=""
          id=""
          autoComplete="off"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          name=""
          id=""
          placeholder="What happen today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://images.unsplash.com/photo-1588948378271-ae6cf0060ff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="imagen"
          />
        </div>
      </form>
    </div>
  );
};

export default NoteScreen;
