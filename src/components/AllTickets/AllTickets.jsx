import React, { useState } from "react";
import TicketDetail from "../../pages/TicketDetail/TicketDetail";
import dayjs from "dayjs";
import * as Chakra from "@chakra-ui/react";
import Card from "react-bootstrap/Card";
import style from "./AllTickets.module.css";

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
  return (
    <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
        <>
          {tickets?.map((ticket, k) => (
            <>
              {ticket.completed !== true ? (
                <Card style={{ width: "50rem" }} key={k}>
                  <Card.Body key={k}>
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
                    <Card.Title colorScheme="red">
                      <Chakra.Box x bg="tomato">
                        {ticket.assingedTo}
                      </Chakra.Box>
                    </Card.Title>
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
                            w="10rem"
                            size="sm"
                            onClick={() => handleDeleteTicket(ticket._id)}
                          >
                            Delete
                          </Chakra.Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Card.Body>
                </Card>
              ) : null}
            </>
          ))}
        </>
      </div>
    </div>
  );
}

export default AllTickets;
