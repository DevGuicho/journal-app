import React from "react";
import { FaMoon, FaCalendarPlus } from "react-icons/fa";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <FaMoon size="15px" />
          <span> Luis</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <FaCalendarPlus size="30px" />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
