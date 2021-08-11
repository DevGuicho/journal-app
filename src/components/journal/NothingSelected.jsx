import React from "react";
import { FaStar } from "react-icons/fa";

const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p>
        Select something
        <br />
        Or create an entry
      </p>
      <FaStar />
    </div>
  );
};

export default NothingSelected;
