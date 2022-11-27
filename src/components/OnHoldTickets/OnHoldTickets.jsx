import React from "react";
import dayjs from "dayjs";
import * as Chakra from "@chakra-ui/react";
import DetailModal from "../DetailModal/DetailModal";
import styles from "../OpenTickets/OpenTickets.module.css";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";

const OnHoldTickets = () => {
  const { tickets, setTickets, updateStatus } = useTicketsContext();

  //handling different state of drag
  const dragHasStarted = (e, id) => e.dataTransfer.setData("TicketId", id);
  const draggingOver = (e) => e.preventDefault();

  const dragDropped = (e) => {
    let grabData = e.dataTransfer.getData("TicketId");
    const status = "On Hold";
    const setTicketToOnHoldTickets = tickets?.map((ticket) => {
      if (ticket._id === grabData) {
        ticket.status = status;
        updateStatus(ticket._id, status);
      }
      return ticket;
    });
    setTickets(setTicketToOnHoldTickets);
  };

  return (
    <>
      <Chakra.Box h="45rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="10rem"
          mb="15px"
          mt="15px"
          fontSize="1.5em"
          background="lightBlue"
          color="white"
          className={styles.TicketsBadge}
          align="center"
        >
          On Hold{" "}
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
                  {ticket.status === "On Hold" ? (
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
                        <Chakra.Flex direction="row" align="center">
                          <Chakra.Flex direction="row" w="50%">
                            <Chakra.Text color="lightblue">
                              {ticket.title}
                            </Chakra.Text>
                          </Chakra.Flex>
                          <Chakra.Flex w="50%" justify="end">
                            <Chakra.Text fontSize=".8em">
                              <Chakra.Badge color="lightblue">
                                {ticket?.owner.name}
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
                              color={"lightblue"}
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

export default OnHoldTickets;
