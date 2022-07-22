import React from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import * as Chakra from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
dayjs.extend(relativeTime)

function Normal({tickets,handleDeleteTicket}) {
return (
    <div>
      
  {tickets.map((ticket,k)=>(
    <>
     {ticket?.severity === "Normal"?
      <Card style={{ width: '18rem' }} key={{ ticket }}>
        <Card.Body>
                              {
             ticket.severity === "Normal"? 
              <Chakra.Badge colorScheme='blue'>{ticket.severity}</Chakra.Badge>
            : 
            null
          }
          <Card.Title> {ticket.assingedTo}</Card.Title>
          
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
          <Card.Text>{ticket.details}
          </Card.Text>
              <Chakra.Button colorScheme='red'
							onClick={() => handleDeleteTicket(ticket._id)}>
							Delete
						</Chakra.Button>
        </Card.Body>
      </Card>
      : 
      null
      }
      </>
    ))}
      
    </div>
  );
}

export default Normal;