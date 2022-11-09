import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import * as Chakra from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import style from "../AllTickets/AllTickets.module.css";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

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
          <React.Fragment key={ticket._id}>
            {ticket?.completed === true ? (
              <Chakra.Box key={k} className={style.ticketCard}>
                <Card.Body key={k}>
                  <div className={style.ticketCardTopHeader}>
                    <div className={style.ticketDate}>
                      <Card.Subtitle className="mb-2 text-muted">
                        {dayjs().to(dayjs(ticket.createdAt))}{" "}
                      </Card.Subtitle>
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
                    </div>
                    <div className={style.assingedTo}>
                      <Card.Title>
                        <Chakra.Box>
                          {" "}
                          Assigned To: {ticket.assingedTo}
                        </Chakra.Box>
                      </Card.Title>
                    </div>
                  </div>
                  <div className={style.AllTicketsDetails}>
                    <div className={style.AllTicketsDetailsComponent}>
                      {ticket.details}
                    </div>
                  </div>
                  <div className={style.ticketButtonAndSubject}>
                    <div className={style.ticketSubject}>
                      <h5>Subject: {ticket.subject}</h5>
                    </div>
                    <div className={style.AllTicketsButton}>
                      <Chakra.Button
                        size="sm"
                        colorScheme="green"
                        onClick={() => {
                          completed(ticket);
                        }}
                        defaultChecked="off"
                      >
                        Completed
                      </Chakra.Button>
                      <Link
                        to={`/tickets-detail/${ticket._id}`}
                        state={[ticket]}
                      >
                        <Chakra.Button size="sm" colorScheme="blue">
                          Detail
                        </Chakra.Button>
                      </Link>
                      <Popover>
                        <PopoverTrigger>
                          <Chakra.Button size="sm" colorScheme="red">
                            Delete
                          </Chakra.Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton colorScheme="red" />
                          <PopoverHeader>Confirm Delete</PopoverHeader>
                          <PopoverBody>
                            <Chakra.Button
                              colorScheme="red"
                              fontSize="13px"
                              onClick={() => handleDeleteTicket(ticket._id)}
                            >
                              Delete
                            </Chakra.Button>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </Card.Body>
              </Chakra.Box>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CompletedTickets;
