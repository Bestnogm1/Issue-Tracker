import React from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import Card from 'react-bootstrap/Card';

dayjs.extend(relativeTime)

  // console.log(dayjs().to(dayjs("2022-07-15T22:36:05.410Z")) )
function DashBoard({tickets,handleDeleteTicket}) {
  console.log(tickets);

  return (
    <>
    {tickets.map((ticket,k)=>(
      <Card style={{ width: '18rem' }} key={{ ticket }}>
        <Card.Body>
          <Card.Title> {ticket.assingedTo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{dayjs().to(dayjs(ticket.createdAt)) }</Card.Subtitle>
          <Card.Text>{ticket.details}
          </Card.Text>
              <button
							onClick={() => handleDeleteTicket(ticket._id)}>
							Delete
						</button>
          <Card.Link href="#">Card </Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}
    </>
    );
}

export default DashBoard;