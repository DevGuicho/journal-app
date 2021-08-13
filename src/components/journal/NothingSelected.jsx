import React from "react";
import { FaStar } from "react-icons/fa";

const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p className="mb-1">
        Select something
        <br />
        Or create an entry
      </p>
      <FaStar size="20px" />
    </div>
  );
};

export default NothingSelected;
