// import {useId} from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import InProgressTickets from "../InProgressTickets/InProgressTickets";
import OpenTickets from "../OpenTickets/OpenTickets";
import ClosedTickets from "../ClosedTickets/ClosedTickets";
import OnHoldTickets from "../OnHoldTickets/OnHoldTickets";
import styles from "./DashBoard.module.css";

dayjs.extend(relativeTime);

function DashBoard({ isOver, children }) {
  return (
    <div className={styles.allDashBoard}>
      <OpenTickets />
      <InProgressTickets />
      <OnHoldTickets />
      <ClosedTickets />
    </div>
  );
}

export default DashBoard;
