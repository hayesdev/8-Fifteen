import React from "react";
import { Link } from "react-router-dom";
import StatusDisplay from "./StatusDisplay";
import AvatarDisplay from "./AvatarDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <div className="ticket-color"></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticke={ticket} />
        <PriorityDisplay />
        <ProgressDisplay />
        <StatusDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
