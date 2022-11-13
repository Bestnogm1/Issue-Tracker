import React from "react";
import { useFakeApiTesting } from "../../contexts/FakeApiTesting/FakeApiTesting";
import * as Chakra from "@chakra-ui/react";
import Window from "../Window/Window";
import styles from "../OpenTickets/OpenTickets.module.css";

function InProgressTickets(props) {
  const { fakeTickets, setFakeTickets } = useFakeApiTesting();
  function dragDropped(e) {
    let grabData = e.dataTransfer.getData("todoId");
    let editTicket = fakeTickets.map((ticket) => {
      if (ticket.id === Number(grabData)) {
        ticket.status = "InProgressTickets";
      }
      return ticket;
    });
    setFakeTickets(editTicket);
  }

  function draggingOver(e) {
    e.preventDefault();
  }
  const dragHasStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };
  return (
    <>
      <Chakra.Box h="45rem" w="35rem" bg="#F1F1F1" className={styles.Tickets}>
        <Chakra.Badge
          ml="30px"
          w="11rem"
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
          >
            {fakeTickets.map((tickets) => (
              <React.Fragment key={tickets.id}>
                {/* {tickets.status === "Open Ticket" ? ( */}
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
                    <Chakra.Flex direction="row" align="center" gap="10rem">
                      <Window name={tickets.context} id={tickets.id} />
                      <Chakra.Text fontSize=".9em">
                        10/24/32
                        {/* {dayjs().to(dayjs(ticket.createdAt))} */}
                      </Chakra.Text>
                    </Chakra.Flex>
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

export default InProgressTickets;
