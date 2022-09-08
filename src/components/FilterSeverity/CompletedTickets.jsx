import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import * as Chakra from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import style from "../AllTickets/AllTickets.module.css";
dayjs.extend(relativeTime);
function CompletedTickets({
  tickets,
  handleDeleteTicket,
  completed,
  handleGetAllLobby,
}) {
  return (
    <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
        {tickets.map((ticket, k) => (
          <>
            {ticket?.completed === true ? (
              <Card style={{ width: "12rem" }} key={k}>
                <Card.Body key={k}>
                  {ticket.severity === "Low" ? (
                    <Chakra.Badge colorScheme="yellow">
                      {ticket.severity}
                    </Chakra.Badge>
                  ) : ticket.severity === "Normal" ? (
                    <Chakra.Badge colorScheme="blue">
                      {ticket.severity}
                    </Chakra.Badge>
                  ) : ticket.severity === "High" ? (
                    <Chakra.Badge colorScheme="red">
                      {ticket.severity}
                    </Chakra.Badge>
                  ) : ticket.severity === "Urgent" ? (
                    <Chakra.Badge colorScheme="orange">
                      {ticket.severity}
                    </Chakra.Badge>
                  ) : null}
                  <Chakra.Button
                    colorScheme="green"
                    w="5rem"
                    h="2rem"
                    fontSize="13px"
                    onClick={() => {
                      completed(ticket);
                      handleGetAllLobby();
                    }}
                    defaultChecked="off"
                  >
                    Completed
                  </Chakra.Button>
                  <Card.Title> {ticket.assingedTo}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {dayjs().to(dayjs(ticket.createdAt))}
                  </Card.Subtitle>
                  <Card.Text>{ticket.details}</Card.Text>
                  <Chakra.Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDeleteTicket(ticket._id)}
                  >
                    Delete
                  </Chakra.Button>
                </Card.Body>
              </Card>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default CompletedTickets;
