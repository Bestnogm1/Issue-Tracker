import React from "react";
import * as Chakra from "@chakra-ui/react";
import DescriptionTab from "./DescriptionTab";
import CommentsTabs from "./CommentsTabs";
import DetailImageTab from "./DetailImageTab";

const MainTabsComponents = ({
  ticketDescription,
  ticketDetailId,
  ticketDetail,
}) => {
  return (
    <Chakra.Tabs>
      <Chakra.TabList>
        <Chakra.Tab>Description</Chakra.Tab>
        <Chakra.Tab>Comments</Chakra.Tab>
        {ticketDetail.imageUrl ? <Chakra.Tab>View image</Chakra.Tab> : null}
      </Chakra.TabList>
      <Chakra.TabPanels>
        <Chakra.TabPanel>
          <DescriptionTab ticketDescription={ticketDescription} />
        </Chakra.TabPanel>
        <Chakra.TabPanel>
          <CommentsTabs ticketDetailId={ticketDetailId} />
        </Chakra.TabPanel>
        {ticketDetail.imageUrl ? (
          <Chakra.TabPanel>
            <DetailImageTab ticketDetail={ticketDetail} />
          </Chakra.TabPanel>
        ) : null}
      </Chakra.TabPanels>
    </Chakra.Tabs>
  );
};

export default MainTabsComponents;
