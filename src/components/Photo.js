import React from "react";
import { useSelector } from "react-redux";

function Photo() {
    const mode = useSelector((state) => state);

  return (
    <div className="Photo">
      <img src={mode.photo} alt="author" width="250" />
    </div>
  );
}

export default Photo;
