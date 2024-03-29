import React, { useState } from "react";
import Modal from "react-modal";
import * as Chakra from "@chakra-ui/react";
import MainTabsComponents from "../TabsComponents/MainTabsComponents";
import Comments from "../Comments/Comments";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
import { useUserContext } from "../../contexts/UserContexts/UserContexts";

const DetailModal = ({ ticketDetail, color }) => {
  Modal.setAppElement("body");
  const { user } = useUserContext();

  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleDeleteTicket, customStyles } = useTicketsContext();

  //functions to handle Open and Close Modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Chakra.Box>
          <Chakra.Flex pb="15px" justify="flexStart" align="center">
            <Chakra.Box w="50%">
              <Chakra.Text fontSize="50px"> {ticketDetail?.title} </Chakra.Text>
            </Chakra.Box>
            <Chakra.Box w="50%">
              <Chakra.Flex align="center" justify="flex-end">
                <Chakra.Button
                  fontSize="20px"
                  variant="ghost"
                  onClick={closeModal}
                >
                  X
                </Chakra.Button>
              </Chakra.Flex>
            </Chakra.Box>
          </Chakra.Flex>
          <Chakra.Box>
            <Chakra.Flex gap="1rem">
              <Chakra.Text fontSize="20px">Assignee: </Chakra.Text>
              {ticketDetail?.assignees.length !== 0 ? (
                ticketDetail?.assignees.map((assignee, i) => (
                  <React.Fragment key={i}>
                    <>
                      <Chakra.Flex align="center" direction="column">
                        <Chakra.Tooltip
                          label={assignee.name}
                          aria-label="A tooltip"
                        >
                          <Chakra.Image
                            borderRadius="full"
                            boxSize="30px"
                            src={assignee.profilePicture}
                            alt={assignee.name}
                          />
                        </Chakra.Tooltip>
                      </Chakra.Flex>
                    </>
                  </React.Fragment>
                ))
              ) : (
                <Chakra.Flex align="center" direction="column">
                  <Chakra.Badge>
                    <h1>Unassigned</h1>
                  </Chakra.Badge>
                </Chakra.Flex>
              )}
            </Chakra.Flex>
            <Chakra.Flex fontSize="20px" color={color}>
              Status: {ticketDetail?.status}
            </Chakra.Flex>
            <Chakra.Flex fontSize="20px" align="center">
              Priority:
              {ticketDetail?.priority === "Urgent" ? (
                <Chakra.Badge
                  colorScheme="orange"
                  align="center"
                  color="white"
                  variant="solid"
                  fontSize="0.6em"
                  rounded="md"
                  height="20px"
                  ml=".5rem"
                >
                  {ticketDetail?.priority}
                </Chakra.Badge>
              ) : ticketDetail?.priority === "High" ? (
                <Chakra.Badge
                  colorScheme="red"
                  align="center"
                  color="white"
                  variant="solid"
                  fontSize="0.6em"
                  rounded="md"
                  height="20px"
                  ml=".5rem"
                >
                  {ticketDetail?.priority}
                </Chakra.Badge>
              ) : ticketDetail?.priority === "Normal" ? (
                <Chakra.Badge
                  colorScheme="green"
                  align="center"
                  color="white"
                  variant="solid"
                  fontSize="0.6em"
                  rounded="md"
                  height="20px"
                  ml=".5rem"
                >
                  {ticketDetail?.priority}
                </Chakra.Badge>
              ) : ticketDetail?.priority === "Low" ? (
                <Chakra.Badge
                  colorScheme="yellow"
                  align="center"
                  color="white"
                  variant="solid"
                  fontSize="0.6em"
                  rounded="md"
                  height="20px"
                  ml=".5rem"
                >
                  {ticketDetail?.priority}
                </Chakra.Badge>
              ) : null}
            </Chakra.Flex>
          </Chakra.Box>
          <Chakra.Flex gap="2rem" align="center">
            <Chakra.Text fontSize="20px">Issue:</Chakra.Text>
            <Chakra.Badge>{ticketDetail?.issue}</Chakra.Badge>
          </Chakra.Flex>
          <Chakra.Box>
            <MainTabsComponents
              ticketDescription={ticketDetail?.description}
              ticketDetailId={ticketDetail?.tempUUID}
              ticketDetail={ticketDetail}
            />
          </Chakra.Box>
          <Chakra.Box>
            <Comments ticketDetailId={ticketDetail?.tempUUID} />
          </Chakra.Box>
        </Chakra.Box>
        {user ? (
          user.profile === ticketDetail.owner?._id ? (
            <Chakra.Button
              ml="10px"
              mt="15px"
              colorScheme="red"
              size="md"
              onClick={() => handleDeleteTicket(ticketDetail.tempUUID)}
            >
              Delete
            </Chakra.Button>
          ) : null
        ) : null}
      </Modal>
    </div>
  );
};

export default DetailModal;
