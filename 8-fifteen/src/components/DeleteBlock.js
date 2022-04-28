import React from "react";

const DeleteBlock = () => {
  const deleteTicket = () => console.log("ticket deleted!");
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        ✕
      </div>
    </div>
  );
};

export default DeleteBlock;
