import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import * as Chakra from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import style from "../AllTickets/AllTickets.module.css";
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

function High({ tickets, handleDeleteTicket, completed }) {
  return (
    <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
        {tickets.map((ticket, k) => (
          <>
            {ticket.completed !== true ? (
              <>
                {ticket?.severity === "High" ? (
                  <Chakra.Box key={k} className={style.ticketCard}>
                    <Card.Body key={k}>
                      <div className={style.ticketCardTopHeader}>
                        <div className={style.ticketDate}>
                          <Card.Subtitle className="mb-2 text-muted">
                            {dayjs().to(dayjs(ticket.createdAt))}{" "}
                          </Card.Subtitle>
                          {ticket.severity === "High" ? (
                            <Chakra.Badge colorScheme="red">
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
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default High;
