import React from "react";
import * as Chakra from "@chakra-ui/react";

const DetailImageTab = ({ ticketDetail }) => {
  return (
    <div>
      <>
        <Chakra.Image
          src={ticketDetail.imageUrl}
          alt="ticketDetail img"
          boxSize="400px"
        />
      </>
    </div>
  );
};

export default DetailImageTab;
