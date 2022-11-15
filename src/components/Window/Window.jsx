import React, { useState } from "react";
import Modal from "react-modal";
import * as Chakra from "@chakra-ui/react";
import MainTabsComponents from "../TabsComponents/MainTabsComponents";
import Comments from "../Comments/Comments";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
import { useNavigate } from "react-router-dom";

function Window({ ticketDetail }) {
  const { handleDeleteTicket } = useTicketsContext();
  Modal.setAppElement("body");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "45rem",
      height: "49rem",
    },
  };
  let navigate = useNavigate();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <Chakra.Button
        colorScheme="teal"
        variant="outline"
        onClick={openModal}
        size="xs"
      >
        Detail
      </Chakra.Button>
      {/*  */}
      {/* <button onClick={closeModal}>Close</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/*  */}

        <Chakra.Box>
          <Chakra.Flex>
            {/* <Chakra.Badge onClick={closeModal}>close</Chakra.Badge> */}
            <Chakra.Text fontSize="3rem" fontWeight="bold" width="100%">
              {ticketDetail?.title}
            </Chakra.Text>
          </Chakra.Flex>
          {/*  */}

          <Chakra.Box>
            <Chakra.Flex gap="1rem">
              <Chakra.Text fontSize="20px">Assignee: </Chakra.Text>
              {ticketDetail?.assignees.map((assignee, i) => (
                <React.Fragment key={i}>
                  <Chakra.Text fontSize="20px"> {assignee?.name}</Chakra.Text>
                </React.Fragment>
              ))}
            </Chakra.Flex>
            <Chakra.Flex fontSize="20px">
              Status: {ticketDetail?.status}
            </Chakra.Flex>
          </Chakra.Box>
          <Chakra.Flex gap="2rem" align="center">
            <Chakra.Text fontSize="20px">Issue:</Chakra.Text>
            <Chakra.Badge>{ticketDetail?.issue}</Chakra.Badge>
          </Chakra.Flex>
          {/*  */}

          <Chakra.Box>
            <MainTabsComponents
              ticketDescription={ticketDetail?.description}
              ticketDetailId={ticketDetail._id}
            />
          </Chakra.Box>
          <Chakra.Box>
            <Comments ticketDetailId={ticketDetail._id} />
          </Chakra.Box>
        </Chakra.Box>
        <Chakra.Button
          ml="10px"
          mt="15px"
          colorScheme="red"
          size="md"
          onClick={() => handleDeleteTicket(ticketDetail._id)}
        >
          Delete
        </Chakra.Button>
      </Modal>
    </div>
  );
}

export default Window;
