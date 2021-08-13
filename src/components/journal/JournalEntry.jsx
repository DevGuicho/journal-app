import React from "react";
import moment from "moment";
import "moment/locale/es-mx";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notesActions";
const JournalEntry = ({ id, date, title, body, url }) => {
  moment.locale("es-mx");
  const noteDate = moment(date);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };
  return (
    <div
      className="journal__entry animate__animated animate__fadeIn animate__faster"
      onClick={handleClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("DD")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
