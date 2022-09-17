import React, { useState } from "react";
import TicketDetail from "../../pages/TicketDetail/TicketDetail";
import dayjs from "dayjs";
import * as Chakra from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import style from "./AllTickets.module.css";

// const element = <FontAwesomeIcon icon={faCoffee} />;

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function AllTickets({ tickets, handleDeleteTicket, completed }) {
  console.log(tickets);
  return (
    <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
        <>
          {tickets?.map((ticket, k) => (
            <>
              {ticket.completed !== true ? (
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
                          colorScheme="red"
                          w="5rem"
                          h="2rem"
                          fontSize="13px"
                          onClick={() => {
                            completed(ticket);
                          }}
                          defaultChecked="off"
                        >
                          Completed
                        </Chakra.Button>
                        <Popover>
                          <PopoverTrigger>
                            <Chakra.Button>Delete</Chakra.Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Confirm Delete</PopoverHeader>
                            <PopoverBody>
                              {" "}
                              <Chakra.Button
                                colorScheme="red"
                                w="5rem"
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
            </>
          ))}
        </>
      </div>
    </div>
  );
}

export default AllTickets;
