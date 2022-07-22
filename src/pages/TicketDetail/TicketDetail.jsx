import React from 'react';

function TicketDetail({ticket}) {
  return (
    <div>
      <h1> {ticket.assingedTo}</h1>
    </div>
  );
}

export default TicketDetail;