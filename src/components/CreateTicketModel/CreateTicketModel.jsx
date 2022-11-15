import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { useCreateTicketModelContexts } from "../../contexts/CreateTicketModelContexts/CreateTicketModelContexts";
import AssigneeForm from "../AssigneeForm/AssigneeForm";
import Select from "react-select";
import * as Chakra from "@chakra-ui/react";
import * as CreateIssueData from "../../Data/CreateIssueData/CreateIssueData";
import styles from "./CreateTicketModel.module.css";
import { createTickets } from "../../services/ticketsServices";
import { useNavigate } from "react-router-dom";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
function CrateTicketModel(props) {
  Modal.setAppElement("body");
  const [issueType, setIssueType] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const [priority, setPriority] = useState([]);
  const formElement = useRef();
  const {
    setFormData,
    formData,
    modalIsOpen,
    afterOpenModal,
    openModal,
    setIsOpen,
  } = useCreateTicketModelContexts();
  const { setTickets, tickets } = useTicketsContext();
  const navigate = useNavigate();
  //Input Change
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  //Input Submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let submit = {
      assignees,
      issueType: issueType.value,
      priority: priority.value,
      status: "Open Ticket",
    };
    createTickets({ ...formData, ...submit });
    setTickets([...tickets, { ...formData, ...submit }]);
    navigate("/");
    window.location.reload();
  };

  function closeModal() {
    setIsOpen(false);
    navigate("/");
  }

  return (
    <Chakra.Box align="center" bc="red">
      {/*  */}
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={CreateIssueData.createIssueStyles}
        // style={CreateIssueData.createIssueStyles}
        contentLabel="Example Modal"
      >
        <Chakra.Box
          p="2rem"
          className={styles.createTickets}
          onClick={openModal}
        >
          <Chakra.Flex pb="15px" justify="flexStart" pr="20rem">
            <Chakra.Box>
              <Chakra.Text fontSize="50px"> Create An Issue </Chakra.Text>
            </Chakra.Box>
          </Chakra.Flex>
          {/*   */}
          <form onSubmit={handleSubmit} ref={formElement}>
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text mb="8px" fontSize="15px">
                Issue Type
              </Chakra.Text>
              <Select
                name="IssueType"
                defaultValue={issueType}
                options={CreateIssueData.options}
                onChange={setIssueType}
              />
            </Chakra.Flex>

            {/*  */}
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text mb="8px" fontSize="15px">
                Title
              </Chakra.Text>
              <Chakra.Input
                variant="filled"
                placeholder="title"
                required
                type="text"
                name="title"
                onChange={handleChange}
              />
            </Chakra.Flex>

            {/*  */}
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text fontSize="15px" mb="8px">
                Description
              </Chakra.Text>
              <Chakra.Textarea
                required
                type="text"
                name="description"
                variant="filled"
                onChange={handleChange}
                placeholder="details"
                resize="none"
              />
            </Chakra.Flex>

            {/*  */}
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text mb="8px" fontSize="15px">
                Assignees
              </Chakra.Text>
              <AssigneeForm setAssignees={setAssignees} assignees={assignees} />
            </Chakra.Flex>

            {/*  */}
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text mb="8px" fontSize="15px">
                Priority
              </Chakra.Text>
              <Select
                name="priority"
                defaultValue={priority}
                options={CreateIssueData.Priority}
                onChange={setPriority}
              />
            </Chakra.Flex>

            {/*  */}
            <Chakra.Flex direction="column" pb="15px" gap="10px">
              <Chakra.Button type="submit" colorScheme="green" size="sm">
                Create Issue
              </Chakra.Button>
              <Chakra.Button
                size="sm"
                colorScheme="gray"
                variant="ghost"
                onClick={openModal}
              >
                Cancel
              </Chakra.Button>
            </Chakra.Flex>
          </form>
        </Chakra.Box>
      </Modal>
    </Chakra.Box>
  );
}

export default CrateTicketModel;
