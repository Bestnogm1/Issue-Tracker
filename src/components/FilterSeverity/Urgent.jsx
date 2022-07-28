import React from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import * as Chakra from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
import style from '../AllTickets/AllTickets.module.css';

dayjs.extend(relativeTime)

function Urgent({ tickets, handleDeleteTicket, completed }) {
  return (
    <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
        {tickets.map((ticket,k)=>(
          <>
            { ticket.completed !== true ?
            <>
            {ticket?.severity === "Urgent"?
              <Card style={{ width: '18rem' }} key={ k }>
                <Card.Body  key={ k }>
                  {
                    ticket.severity === "Urgent"? 
                        <Chakra.Badge colorScheme='orange'>{ticket.severity}</Chakra.Badge>
                      : 
                    null
                  }
                            <Chakra.Button colorScheme='red'
                            onClick={(()=>{
                              completed(ticket) 
                            })} defaultChecked="off">
                            add true
                          </Chakra.Button>
                  <Card.Title> {ticket.assingedTo}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
                  <Card.Text>{ticket.details}</Card.Text>
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
            :
            null
            }
          </>
        ))}
      </div>
    </div>
  );
}

export default Urgent;