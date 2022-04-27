import React from "react";
import blankAvatar from "../images/blank-avatar-3.svg";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar.avatar : blankAvatar}
          alt={`${ticket.owner}`}
        ></img>
      </div>
    </div>
  );
};

export default AvatarDisplay;
