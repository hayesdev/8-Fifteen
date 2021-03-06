import React from "react";
import TicketCard from "../components/TicketCard";
import avatar from "../images/gorski-rpg.png";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "blue",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { avatar },
      status: "done",
      priority: 5,
      progress: 100,
      description: "Video demonstrating working with NFT's safely",
      createdAt: new Date().toISOString(),
    },
    {
      category: "Q2 2022",
      color: "green",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { avatar },
      status: "stuck",
      priority: 1,
      progress: 25,
      description: "Video demonstrating working with NFT's safely",
      createdAt: new Date().toISOString(),
    },
    {
      category: "Q1 2023",
      color: "red",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { avatar },
      status: "working on it",
      priority: 2,
      progress: 75,
      description: "Video demonstrating working with NFT's safely",
      createdAt: new Date().toISOString(),
    },
  ];

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    // elements in a mapping/list need the 'key' prop
                    key={_index}
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
