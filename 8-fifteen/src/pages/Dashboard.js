import React from "react";
import TicketCard from "../components/TicketCard";
import logo from "../images/marmot.jpg";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "blue",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { logo },
      status: "done",
      priority: 5,
      progress: 100,
      description: "Video demonstrating working with NFT's safely",
      createdAt: Date.now(),
    },
    {
      category: "Q2 2022",
      color: "green",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { logo },
      status: "working on it",
      priority: 1,
      progress: 90,
      description: "Video demonstrating working with NFT's safely",
      createdAt: Date.now(),
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Video",
      owner: "Greg Hayes",
      avatar: { logo },
      status: "working on it",
      priority: 2,
      progress: 25,
      description: "Video demonstrating working with NFT's safely",
      createdAt: Date.now(),
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

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
                    id={_index}
                    color={filteredTicket.color}
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
