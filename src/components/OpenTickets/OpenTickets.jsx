import React from "react";
import { useFakeApiTesting } from "../../contexts/FakeApiTesting/FakeApiTesting";
import Window from "../Window/Window";
import styles from "./OpenTickets.module.css";
import * as Chakra from "@chakra-ui/react";
import dayjs from "dayjs";

import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
function OpenTickets(props) {
  const { fakeTickets, setFakeTickets } = useFakeApiTesting();
  const { tickets } = useTicketsContext();
  // console.log(tickets);
  function dragDropped(e) {
    let grabData = e.dataTransfer.getData("todoId");
    let editTicket = fakeTickets.map((ticket) => {
      if (ticket.id === Number(grabData)) {
        ticket.status = "OpenTickets";
      }
      return ticket;
    });
    setFakeTickets(editTicket);
  }

  const dragHasStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  function draggingOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <Chakra.Box h="45rem" w="35rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="5.5rem"
          mb="15px"
          mt="15px"
          fontSize="1.5em"
          colorScheme="green"
          className={styles.TicketsBadge}
          align="center"
        >
          Open
        </Chakra.Badge>
        <Chakra.Box className={styles.TicketsBox} h="40rem">
          <Chakra.Box
            onDrop={(e) => dragDropped(e)}
            droppable="true"
            onDragOver={(e) => draggingOver(e)}
          >
            {tickets?.map((ticket) => (
              <React.Fragment key={ticket._id}>
                {ticket.status === "Open Ticket" ? (
                  <Chakra.Box
                    className={styles.TicketsCards}
                    bg="white"
                    w="85%"
                    ml="30px"
                    mb="15px"
                    mt="15px"
                    draggable="true"
                    onDragStart={(e) => dragHasStarted(e, tickets.id)}
                  >
                    <Chakra.Box p="13px">
                      <Chakra.Flex direction="column">
                        <Chakra.Text color="green">{ticket.title}</Chakra.Text>
                        <Chakra.Text fontSize=".8em">
                          {ticket?.owner.name}
                        </Chakra.Text>
                      </Chakra.Flex>
                      <Chakra.Flex direction="column">
                        <Chakra.Box className={styles.TicketsDetail}>
                          <Chakra.Text>{ticket.description}</Chakra.Text>
                        </Chakra.Box>
                      </Chakra.Flex>
                      <Chakra.Flex direction="row" align="center" gap="10rem">
                        <Window ticketDetail={ticket} />
                        <Chakra.Text fontSize=".7em">
                          {dayjs().to(dayjs(ticket.createdAt))}
                        </Chakra.Text>
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

export default OpenTickets;
