// import {useId} from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import Card from 'react-bootstrap/Card';
import * as Chakra from '@chakra-ui/react'
import AllTickets from '../../components/AllTickets/AllTickets'
import High from '../../components/FilterSeverity/High'
import Low from '../../components/FilterSeverity/Low'
import Normal from '../../components/FilterSeverity/Normal'
import Urgent from '../../components/FilterSeverity/Urgent'
import style from "./DashBoard.module.css"
dayjs.extend(relativeTime)
function DashBoard({tickets,handleDeleteTicket}) {
  console.log(tickets);
  return (
    <>
      <Chakra.Tabs>
        <Chakra.TabList>
          <div className={style.tabsModule}>
          <Chakra.Tab>All</Chakra.Tab>
          <Chakra.Tab>Low</Chakra.Tab>
          <Chakra.Tab>Normal</Chakra.Tab>
          <Chakra.Tab>High</Chakra.Tab>
          <Chakra.Tab>Urgent</Chakra.Tab>
          </div>
        </Chakra.TabList>
        <Chakra.TabPanels>
          <Chakra.TabPanel>
            <AllTickets tickets={tickets} handleDeleteTicket={handleDeleteTicket}/>
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>Low!</p>
            <Low tickets={tickets} handleDeleteTicket={handleDeleteTicket}/>
          </Chakra.TabPanel>
          <Chakra.TabPanel>
            <p>Normal!</p>
            <Normal tickets={tickets} handleDeleteTicket={handleDeleteTicket}/>
          </Chakra.TabPanel>
            <Chakra.TabPanel>
            <p>High!</p>
            <High tickets={tickets} handleDeleteTicket={handleDeleteTicket}/>
          </Chakra.TabPanel>
            <Chakra.TabPanel>
            <p>Urgent!</p>
            <Urgent tickets={tickets} handleDeleteTicket={handleDeleteTicket}/>
          </Chakra.TabPanel>
        </Chakra.TabPanels>
      </Chakra.Tabs>
    </>
    );
}

export default DashBoard;