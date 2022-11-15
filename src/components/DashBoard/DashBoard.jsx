// import {useId} from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import InProgressTickets from "../InProgressTickets/InProgressTickets";
import OpenTickets from "../OpenTickets/OpenTickets";
import ClosedTickets from "../ClosedTickets/ClosedTickets";
import OnHoldTickets from "../OnHoldTickets/OnHoldTickets";
import styles from "./DashBoard.module.css";
import * as Chakra from "@chakra-ui/react";

dayjs.extend(relativeTime);

function DashBoard({ isOver, children }) {
  return (
    <Chakra.Box
      className={styles.allDashBoard}
      height="90%"
      mt="22px"
      ml="6rem"
      pl="3rem"
    >
      <Chakra.Box className={styles.allDashBoard} height="90%" mt="22px">
        <OpenTickets />
        <InProgressTickets />
        <OnHoldTickets />
        <ClosedTickets />
      </Chakra.Box>
    </Chakra.Box>
  );
}

export default DashBoard;
