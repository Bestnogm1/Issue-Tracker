import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as ticketsServices from "../../services/ticketsServices";
import Message from "../../components/Message/Message.jsx";
import styles from "./TicketDetail.module.css";
import * as profileService from "../../services/profileService";
import dayjs from "dayjs";
import { Badge } from "@chakra-ui/react";

function TicketDetail({ tickets, user }) {
  const [ticket, setTickets] = useState({});
  const { ticket_id } = useParams();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    profileService.getAllProfiles().then((res) => setProfiles(res));
  }, []);

  const findOwner = (ownerId) => {
    const foundOwner = profiles?.find((owner) => owner._id === ownerId);
    return foundOwner?.name;
  };

  useEffect(() => {
    ticketsServices.getAllTicketsId(ticket_id).then((res) => setTickets(res));
  }, []);

  return (
    <>
      <div className={styles.ticketDetails}>
        <div className={styles.ticketDetailsTitle}>
          <h1>Ticket Details</h1>
        </div>
        <div className={styles.ticketDetailsRightSide}>
          <div className={styles.ticketDetailsRightTopContainer}>
            <div className={styles.ticketDetailsRightRequestCreated}>
              <h1> request BY: "andrew"</h1>
              <h1> created 2 days ago</h1>
            </div>
            <div className={styles.ticketDetailsRightAssignedTo}>
              <h1>assignedTo: "zena"</h1>
            </div>
          </div>
          <div className={styles.ticketDetailsRightTicketId}>
            <h1>center</h1>
          </div>
          <div className={styles.ticketDetailsRightDetail}>
            <h1> detail</h1>
          </div>
          <div className={styles.ticketDetailsRightSubject}>
            <h1>Subject</h1>
          </div>
        </div>
        <div className={styles.ticketDetailsLeftSide}>
          <div className={styles.ticketDetailsContainerRightSide}>
            <h1> right side</h1>
            <Message ticket_id={ticket_id} user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetail;
