  import React ,{useState}from 'react';
  import TicketDetail from '../../pages/TicketDetail/TicketDetail'
import dayjs from 'dayjs'
import * as Chakra from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
import style from "./AllTickets.module.css";
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
function AllTickets({tickets,handleDeleteTicket,completed}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                   

                      <Chakra.Button colorScheme='green'
                      w="5rem"
                      h="2rem"
                      fontSize='13px'
                        onClick={(()=>{
                          completed(ticket) 
                        })} defaultChecked="off">
                        Completed
                      </Chakra.Button>
                    <Card.Title > {ticket.assingedTo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" >{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
                    
                    <Popover>
                      <PopoverTrigger>
                        <Chakra.Button>Trigger</Chakra.Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody> <Chakra.Button colorScheme='red'
                        w="10rem"
                          size='sm'
                          onClick={() => handleDeleteTicket(ticket._id)}>
                          Delete
                        </Chakra.Button></PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <Chakra.Button colorScheme='red'
                    w="10rem"
                      size='sm'
                      onClick={() => handleDeleteTicket(ticket._id)}>
                      Delete
                    </Chakra.Button>
                          <Chakra.Button onClick={onOpen}>Open Modal</Chakra.Button>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>Modal Title</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Card.Title > {ticket.assingedTo}</Card.Title>
                                {/* <Card.Text >{ticket.details}</Card.Text> */}
                                 <button>
                                <Link to={`/ticket-detail/${ticket?._id}` } state = { ticket }> </Link>
                                </button>
                                
                              </ModalBody>
                              <ModalFooter>
                                <Chakra.Button colorScheme='blue' mr={3} onClick={onClose}>
                                  Close
                                </Chakra.Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
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