// import {useId} from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import * as Chakra from "@chakra-ui/react";
import AllTickets from "../../components/AllTickets/AllTickets";
import High from "../../components/FilterSeverity/High";
import Low from "../../components/FilterSeverity/Low";
import Normal from "../../components/FilterSeverity/Normal";
import Urgent from "../../components/FilterSeverity/Urgent";
import CompletedTickets from "../../components/FilterSeverity/CompletedTickets";
import style from "./DashBoard.module.css";
import SearchCompt from "../../components/SearchComp/SearchCompt";
import { useState } from "react";
// import SearchCompt from "../../components/SearchComp/SearchCompt"
dayjs.extend(relativeTime);
function DashBoard({
  allTickets,
  handleDeleteTicket,
  completed,
  handleGetAllLobby,
}) {
  let [search, setSearch] = useState("");
  let tickets = [];
  allTickets.forEach((ticket) => {
    if (ticket.assingedTo.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
      return tickets.push(ticket);
    } else {
      return ticket;
    }
  });

  return (
    <>
      <Chakra.Tabs w="100%">
        <div className={style.topNavBar}>
          <h1>Ticket Tracker</h1>
        </div>

        <Chakra.TabList w="100%">
          <div className={style.tabsModule}>
            <SearchCompt
              className={style.tab}
              search={search}
              setSearch={setSearch}
            />
            <Chakra.Tab className={style.tab}> All</Chakra.Tab>
            <Chakra.Tab className={style.tab}> Low </Chakra.Tab>
            <Chakra.Tab className={style.tab}> Normal </Chakra.Tab>
            <Chakra.Tab className={style.tab}> High </Chakra.Tab>
            <Chakra.Tab className={style.tab}> Urgent </Chakra.Tab>
            <Chakra.Tab
              className={style.tab}
              onClick={() => handleDeleteTicket(handleGetAllLobby())}
            >
              {" "}
              completed tickets
            </Chakra.Tab>
          </div>
        </Chakra.TabList>
        <Chakra.TabPanels>
          <Chakra.TabPanel>
            <AllTickets
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
            />
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>Low!</p>
            <Low
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
            />
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>Normal!</p>
            <Normal
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
            />
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>High!</p>
            <High
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
            />
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>Urgent!</p>
            <Urgent
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
            />
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>completed tickets!</p>
            <CompletedTickets
              tickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              completed={completed}
              handleGetAllLobby={handleGetAllLobby}
            />
          </Chakra.TabPanel>
        </Chakra.TabPanels>
      </Chakra.Tabs>
    </>
  );
}

export default DashBoard;
