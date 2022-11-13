import React, { createContext, useContext, useEffect, useState } from "react";

import * as ticketsServices from "../../services/ticketsServices";

const CreateTicketsContext = createContext(null);
export const useTicketsContext = () => useContext(CreateTicketsContext);

const Tickets = ({ children }) => {
  const [tickets, setTickets] = useState();

  useEffect(() => {
    ticketsServices.getAllTickets().then((res) => setTickets(res));
  }, []);

  const handleCreateTickets = (newTickets) => {
    ticketsServices.createTickets(newTickets).then((createTickets) => {
      setTickets([createTickets, ...tickets]);
    });
  };

  const completed = (_ticket) => {
    ticketsServices.completedOrNot(_ticket).then(
      setTickets(
        tickets.filter((ticket) => {
          if (ticket._id === _ticket._id) return (ticket.completed = true);
          return ticket;
        })
      )
    );
  };

  const handleDeleteTicket = (id) => {
    ticketsServices
      .deleteOneTickets(id)
      .then(setTickets(tickets.filter((ticket) => ticket._id !== id)));
  };

  const updateStatus = (ticketId, status) => {
    if (status === "Open Ticket") {
      ticketsServices.updateTicketStatus(ticketId, status);
    }
    if (status === "In Progress") {
      ticketsServices.updateTicketStatus(ticketId, status);
    }
    if (status === "On Hold") {
      ticketsServices.updateTicketStatus(ticketId, status);
    }
    if (status === "Completed") {
      ticketsServices.updateTicketStatus(ticketId, status);
    }
  };
  return (
    <CreateTicketsContext.Provider
      value={{
        updateStatus,
        setTickets,
        tickets,
        handleCreateTickets,
        completed,
        handleDeleteTicket,
      }}
    >
      {children}
    </CreateTicketsContext.Provider>
  );
};
export default Tickets;
