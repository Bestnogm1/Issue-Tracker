import React from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import * as Chakra from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import TicketDetail from '../../pages/TicketDetail/TicketDetail'
dayjs.extend(relativeTime)

function AllTickets({tickets,handleDeleteTicket}) {
  return (
    <div>
      <>
  {tickets.map((ticket,k)=>(
      <Card style={{ width: '18rem' }} key={ticket._id}>
        <Card.Body key={ticket._id}>
          <Card.Title key={k}> {ticket.assingedTo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted" key={k}>{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
          <Card.Text key={k}>{ticket.details}
          { ticket.severity === "Low"? 
          <Chakra.Badge colorScheme='yellow'>{ticket.severity}</Chakra.Badge>
          :
           ticket.severity === "Normal"? 
          <Chakra.Badge colorScheme='blue'>{ticket.severity}</Chakra.Badge>
          :
          ticket.severity === "High"? 
          <Chakra.Badge colorScheme='red'>{ticket.severity}</Chakra.Badge>
          : 
            ticket.severity === "Urgent"? 
          <Chakra.Badge colorScheme='orange'>{ticket.severity}</Chakra.Badge>
          :
          null
          }
          </Card.Text>
              <Chakra.Button colorScheme='red'
							onClick={() => handleDeleteTicket(ticket._id)}>
							Delete
						</Chakra.Button>
        </Card.Body>
          
      </Card>
          
    ))}
      </>
    </div>
  );
}

export default AllTickets;