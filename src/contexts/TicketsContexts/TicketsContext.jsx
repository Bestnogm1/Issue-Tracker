import React, { createContext, useContext, useEffect, useState } from "react";
import * as ticketsServices from "../../services/ticketsServices";
import { useToast } from "@chakra-ui/react";
import * as Chakra from "@chakra-ui/react";

const CreateTicketsContext = createContext(null);
export const useTicketsContext = () => useContext(CreateTicketsContext);

const Tickets = ({ children }) => {
  const [tickets, setTickets] = useState();
  const toast = useToast();

  useEffect(() => {
    ticketsServices.getAllTickets().then((res) => setTickets(res));
  }, []);

  const handleCreateTickets = (newTickets) => {
    ticketsServices.createTickets(newTickets).then((createTickets) => {
      setTickets([createTickets, ...tickets]);
    });
  };

  const handleDeleteTicket = (id) => {
    ticketsServices
      .deleteOneTickets(id)
      .then(setTickets(tickets.filter((ticket) => ticket._id !== id)));
    toast({
      position: "bottom-left",
      render: () => (
        <Chakra.Box color="white" p={3} bg="red.500">
          Ticket Deleted
        </Chakra.Box>
      ),
    });
  };

  // Handling the Status of the tickets
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

  //Inline Style components for the Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "45rem",
      height: "49rem",
      boxShadow: "-1px 0 5px 0",
      minWidth: "10%",
      maxWidth: "50%",
      maxHeight: "100%",
    },
  };

  return (
    <CreateTicketsContext.Provider
      value={{
        updateStatus,
        setTickets,
        tickets,
        handleCreateTickets,
        handleDeleteTicket,
        customStyles,
      }}
    >
      {children}
    </CreateTicketsContext.Provider>
  );
};
export default Tickets;
