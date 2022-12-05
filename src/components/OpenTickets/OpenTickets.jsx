import React, { useRef } from "react";
import DetailModal from "../DetailModal/DetailModal";
import styles from "./OpenTickets.module.css";
import * as Chakra from "@chakra-ui/react";
import dayjs from "dayjs";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";

const OpenTickets = () => {
  const { tickets, setTickets, updateStatus } = useTicketsContext();
  const draggingItem = useRef();
  const dragOverItem = useRef();
  //handling different state of drag
  const dragHasStarted = (e, tempUUID, ticketIndexPosition) => {
    e.dataTransfer.setData("TicketTempUUID", tempUUID);
    draggingItem.current = ticketIndexPosition;
  };
  const draggingOver = (e) => e.preventDefault();

  const dragDropped = (e) => {
    let grabData = e.dataTransfer.getData("ticketTempUUID");
    const status = "Open Ticket";
    const setTicketToOpenTicket = tickets?.map((ticket) => {
      if (ticket.tempUUID === grabData) {
        ticket.status = status;
        updateStatus(ticket.tempUUID, status);
      }
      return ticket;
    });
    setTickets(setTicketToOpenTicket);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const handleSort = () => {
    let sortedTickets = [...tickets];
    const draggedOverContent = sortedTickets.splice(draggingItem.current, 1)[0];
    sortedTickets.splice(dragOverItem.current, 0, draggedOverContent);
    draggingItem.current = null;
    dragOverItem.current = null;
    setTickets(sortedTickets);
  };

  return (
    <>
      <Chakra.Box h="45rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="35%"
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
            height="100%"
          >
            {tickets ? (
              tickets?.map((ticket, idx) => (
                <React.Fragment key={idx}>
                  {ticket.status === "Open Ticket" ? (
                    <Chakra.Box
                      className={styles.TicketsCards}
                      bg="white"
                      w="87%"
                      ml="20px"
                      mb="15px"
                      mt="15px"
                      draggable="true"
                      onDragStart={(e) =>
                        dragHasStarted(e, ticket.tempUUID, idx)
                      }
                      onDragEnter={(e) => handleDragEnter(e, idx)}
                      onDragEnd={handleSort}
                    >
                      <Chakra.Box p="13px">
                        <Chakra.Flex direction="row" align="center">
                          <Chakra.Flex direction="row" w="50%">
                            <Chakra.Text color="green">
                              {ticket.title}
                            </Chakra.Text>
                          </Chakra.Flex>
                          <Chakra.Flex w="50%" justify="end">
                            <Chakra.Text fontSize=".8em">
                              <Chakra.Badge color="green">
                                {ticket?.owner?.name}
                              </Chakra.Badge>
                            </Chakra.Text>
                          </Chakra.Flex>
                        </Chakra.Flex>

                        <Chakra.Flex className={styles.imgContainer}>
                          {ticket.imageUrl ? (
                            <img src={ticket.imageUrl} alt="issueTicketImage" />
                          ) : null}
                        </Chakra.Flex>
                        <Chakra.Flex direction="column">
                          <Chakra.Box className={styles.TicketsDetail}>
                            <Chakra.Text>{ticket.description}</Chakra.Text>
                          </Chakra.Box>
                        </Chakra.Flex>
                        <Chakra.Flex direction="row" pt="15px">
                          <Chakra.Flex direction="row" align="end" w="50%">
                            <DetailModal
                              ticketDetail={ticket}
                              color={"green"}
                            />
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

export default OpenTickets;
