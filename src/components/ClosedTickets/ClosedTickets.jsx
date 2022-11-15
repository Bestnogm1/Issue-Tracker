import React from "react";

import dayjs from "dayjs";

import * as Chakra from "@chakra-ui/react";
import Window from "../Window/Window";
import styles from "../OpenTickets/OpenTickets.module.css";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";

function ClosedTickets(props) {
  const { tickets, setTickets, updateStatus } = useTicketsContext();
  const status = "Completed";
  function dragDropped(e) {
    let grabData = e.dataTransfer.getData("TicketId");
    const setTicketToInOpenTicket = tickets.map((ticket) => {
      if (ticket._id === grabData) {
        ticket.status = "Completed";
        updateStatus(ticket._id, status);
      }
      return ticket;
    });
    setTickets(setTicketToInOpenTicket);
  }

  const dragHasStarted = (e, id) => {
    e.dataTransfer.setData("TicketId", id);
  };

  function draggingOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <Chakra.Box h="45rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="10rem"
          mb="15px"
          mt="15px"
          fontSize="1.5em"
          background="purple"
          color="white"
          className={styles.TicketsBadge}
          align="center"
        >
          Closed
        </Chakra.Badge>
        <Chakra.Box className={styles.TicketsBox} h="40rem">
          <Chakra.Box
            onDrop={(e) => dragDropped(e)}
            droppable="true"
            onDragOver={(e) => draggingOver(e)}
            height="100%"
          >
            {tickets?.map((ticket, idx) => (
              <React.Fragment key={idx}>
                {ticket.status === "Completed" ? (
                  <Chakra.Box
                    className={styles.TicketsCards}
                    bg="white"
                    w="87%"
                    ml="30px"
                    mb="15px"
                    mt="15px"
                    draggable="true"
                    onDragStart={(e) => dragHasStarted(e, ticket?._id)}
                  >
                    <Chakra.Box p="13px">
                      <Chakra.Flex direction="column">
                        <Chakra.Text color="purple">{ticket.title}</Chakra.Text>
                        <Chakra.Text fontSize=".8em">
                          {ticket?.owner.name}
                        </Chakra.Text>
                      </Chakra.Flex>
                      <Chakra.Flex direction="column">
                        <Chakra.Box className={styles.TicketsDetail}>
                          <Chakra.Text>{ticket.description}</Chakra.Text>
                        </Chakra.Box>
                      </Chakra.Flex>
                      <Chakra.Flex direction="row">
                        <Chakra.Flex direction="row" align="end" w="50%">
                          <Window ticketDetail={ticket} />
                        </Chakra.Flex>
                        <Chakra.Flex justify="end" w="50%">
                          <Chakra.Text fontSize=".7em">
                            {dayjs().to(dayjs(ticket.createdAt))}
                          </Chakra.Text>
                        </Chakra.Flex>
                      </Chakra.Flex>
                    </Chakra.Box>
                  </Chakra.Box>
                ) : null}
              </React.Fragment>
            ))}
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
}

export default ClosedTickets;
