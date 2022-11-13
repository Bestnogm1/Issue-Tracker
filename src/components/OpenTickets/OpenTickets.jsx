import React from "react";
import { useFakeApiTesting } from "../../contexts/FakeApiTesting/FakeApiTesting";
import Window from "../Window/Window";
import styles from "./OpenTickets.module.css";
import * as Chakra from "@chakra-ui/react";

import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
function OpenTickets(props) {
  const { fakeTickets, setFakeTickets } = useFakeApiTesting();
  const { tickets } = useTicketsContext();
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
      <Chakra.Box
        h="45rem"
        w="35rem"
        bg="#F1F1F1"
        className={styles.OpenTickets}
      >
        <Chakra.Badge
          ml="30px"
          w="5.5rem"
          mb="15px"
          mt="15px"
          fontSize="1.5em"
          colorScheme="green"
          className={styles.OpenTicketsBadge}
          align="center"
        >
          Open
        </Chakra.Badge>
        <Chakra.Box className={styles.OpenTickets} h="40rem">
          <Chakra.Box
            className={styles.testAPi3}
            onDrop={(e) => dragDropped(e)}
            droppable="true"
            onDragOver={(e) => draggingOver(e)}
          >
            {fakeTickets.map((tickets) => (
              <React.Fragment key={tickets.id}>
                {/* {tickets.status === "Open Ticket" ? ( */}
                <Chakra.Box
                  className={styles.OpenTicketsCards}
                  bg="white"
                  w="85%"
                  border="1px solid"
                  // height="10rem"
                  ml="30px"
                  mb="15px"
                  mt="15px"
                  draggable="true"
                  onDragStart={(e) => dragHasStarted(e, tickets.id)}
                >
                  <Chakra.Box p="13px">
                    <Chakra.Flex direction="column">
                      <Chakra.Text color="green">"Title of Issue"</Chakra.Text>
                      <Chakra.Text fontSize=".8em"> "Name"</Chakra.Text>
                    </Chakra.Flex>
                    <Chakra.Flex direction="column">
                      <Chakra.Box className={styles.OpenTicketsDetail}>
                        <Chakra.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </Chakra.Text>
                      </Chakra.Box>
                    </Chakra.Flex>
                    <Window name={tickets.context} id={tickets.id} />
                  </Chakra.Box>
                </Chakra.Box>
                {/* ) : null} */}
              </React.Fragment>
            ))}
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
}

export default OpenTickets;
