  import React ,{useState}from 'react';
import dayjs from 'dayjs'
import * as Chakra from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
import style from "./AllTickets.module.css";
function AllTickets({tickets,handleDeleteTicket,completed}) {
  const [completedYes, setComplete] = useState('')

let test = <h1> this is working</h1>
  function completedagain() {
    return setComplete(test)
  }

  return (
  <div className={style.allTicketCard}>
      <div className={style.innerTicketCard}>
      <>
        {tickets?.map((ticket,k) =>(
              <> 
                { ticket.completed !== true ?
              <Card style={{ width: '12rem' }} key={k}  >
                  <Card.Body key={k}>
                    { 
                      ticket.severity === "Low" ? 
                        <Chakra.Badge colorScheme='yellow'>{ticket.severity}</Chakra.Badge>
                      :
                      ticket.severity === "Normal" ? 
                        <Chakra.Badge colorScheme='blue'>{ticket.severity}</Chakra.Badge>
                      :
                      ticket.severity === "High" ? 
                        <Chakra.Badge colorScheme='red'>{ticket.severity}</Chakra.Badge>
                      :   
                      ticket.severity === "Urgent" ? 
                        <Chakra.Badge colorScheme='orange'>{ticket.severity}</Chakra.Badge>
                      :
                      null
                    } 
                    {
                      ticket.completed === true ?
                        <Chakra.Button colorScheme='green'
                        onClick={() => completed(ticket)} defaultChecked="off">
                        add true
                        </Chakra.Button>
                        :
                          <Chakra.Button colorScheme='red'
                            onClick={(()=>{
                                completedagain()
                                setTimeout(() => {
                                  completed(ticket) 
                                }, "1000")
                            })} defaultChecked="off">
                            add true
                          </Chakra.Button>
                      }
                      <h1>{completedYes}</h1>
                    <Card.Title > {ticket.assingedTo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" >{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
                    <Card.Text >{ticket.details}</Card.Text>
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
            )
          )
        }
      </>
    </div>
  </div>
  );
}

export default AllTickets;