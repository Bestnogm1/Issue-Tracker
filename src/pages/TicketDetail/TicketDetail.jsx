import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as ticketsServices from "../../services/ticketsServices";
import Message from "../../components/Message/Message.jsx";
import styles from "./TicketDetail.module.css";

import dayjs from "dayjs";

function TicketDetail({ tickets, user }) {
  let [ticket, setTickets] = useState({});
  const { ticket_id } = useParams();
  useEffect(() => {
    ticketsServices.getAllTicketsId(ticket_id).then((res) => {
      setTickets(res);
    });
  }, []);
  // console.log(ticket);
  let location = useLocation();
  // console.log(location.state[0]);
  // console.log(ticket)
  return (
    <div className={styles.ticketDetails}>
      <div className={styles.ticketDetailsMainContainer}>
        <div className={styles.ticketDetailsContainerLeftSide}>
          <div className={styles.ticketDetailsContainerTopSide}>
            <div className={styles.ticketDetailsAssignedSubject}>
              {" "}
              {/* <h1>{ticket.owner.name}</h1> */}
              <h1>{ticket.assingedTo}</h1>
              <h1>{ticket.subject}</h1>
            </div>
            <div className={styles.ticketDetailSeverityDate}>
              <h1>{ticket.severity}</h1>
              <h1>{dayjs().to(dayjs(ticket.createdAt))}</h1>
            </div>
          </div>
          <h1 className={styles.ticketDetailsH1}>Ticket Detail:</h1>
          <div className={styles.ticketDetailsContainer}>
            <h1>{ticket.details}</h1>
          </div>
        </div>

        <div className={styles.ticketDetailsContainerRightSide}>
          <h1> right side</h1>
          <Message
            ticketDetail={ticket}
            user={user}
            ticketId={location.state[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
