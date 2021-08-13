import React from "react";
import { Toaster } from "react-hot-toast";
import { FaMoon, FaCalendarPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/authActions";
import { startNewNote } from "../../actions/notesActions";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleNewEntry = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <FaMoon size="15px" />
          <span> {user.name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleNewEntry}>
        <FaCalendarPlus size="30px" />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
      <Toaster />
    </aside>
  );
};

export default Sidebar;
