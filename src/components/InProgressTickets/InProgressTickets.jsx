import React from "react";
import * as Chakra from "@chakra-ui/react";
import DetailModal from "../DetailModal/DetailModal";
import styles from "../OpenTickets/OpenTickets.module.css";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
import dayjs from "dayjs";

const InProgressTickets = () => {
  const { tickets, setTickets, updateStatus } = useTicketsContext();

  //handling different state of drag
  const dragHasStarted = (e, id) => e.dataTransfer.setData("TicketId", id);
  const draggingOver = (e) => e.preventDefault();

  const dragDropped = (e) => {
    let grabData = e.dataTransfer.getData("TicketId");
    const status = "In Progress";
    const setTicketToInProgress = tickets?.map((ticket) => {
      if (ticket._id === grabData) {
        ticket.status = status;
        updateStatus(ticket._id, status);
      }
      return ticket;
    });
    setTickets(setTicketToInProgress);
  };

  return (
    <>
      <Chakra.Box h="45rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="13rem"
          mb="15px"
          mt="15px"
          fontSize="1.5em"
          background="red"
          color="white"
          className={styles.TicketsBadge}
          align="center"
        >
          In Progress
        </Chakra.Badge>
        <Chakra.Box className={styles.TicketsBox} h="40rem">
          <Chakra.Box
            onDrop={(e) => dragDropped(e)}
            droppable="true"
            onDragOver={(e) => draggingOver(e)}
            height="100%"
          >
            {tickets ? (
              tickets?.map((ticket, idx) => (
                <React.Fragment key={idx}>
                  {ticket.status === "In Progress" ? (
                    <Chakra.Box
                      className={styles.TicketsCards}
                      bg="white"
                      w="87%"
                      ml="30px"
                      mb="15px"
                      mt="15px"
                      draggable="true"
                      onDragStart={(e) => dragHasStarted(e, ticket._id)}
                    >
                      <Chakra.Box p="13px">
                        <Chakra.Flex direction="column">
                          <Chakra.Text color="red">{ticket.title}</Chakra.Text>
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
                            <DetailModal ticketDetail={ticket} color={"red"} />
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
              ))
            ) : (
              <Chakra.Box>
                <Chakra.Flex w="100%" justify="center" align="center" size="lg">
                  <Chakra.Spinner />
                </Chakra.Flex>
              </Chakra.Box>
            )}
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
};

export default InProgressTickets;
