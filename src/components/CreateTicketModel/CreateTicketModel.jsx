import { useState, useRef } from "react";
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
import { MdAdd } from "react-icons/md";
import AddImages from "../AddImages/AddImages";
import { v4 as uuidv4 } from "uuid";

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
    closeModal,
    file,
    setFile,
    submitImage,
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

  let tempUUID = uuidv4();
  //Input Submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let submit = {
      assignees,
      issue: issueType.value,
      priority: priority.value,
      status: "Open Ticket",
      tempUUID: tempUUID,
    };
    createTickets({ ...formData, ...submit });
    setTickets([...tickets, { ...formData, ...submit }]);

    if (file) {
      submitImage(tempUUID);
    }
    navigate("/");

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <Chakra.Box align="center" bc="red">
      <Chakra.Box variant="outline" onClick={openModal} size="lg">
        <Chakra.Flex direction="column" justify="center">
          <Chakra.Icon
            as={MdAdd}
            color="white"
            aria-label="Call Sage"
            fontSize="85px"
          />
          <Chakra.Badge>Add issue</Chakra.Badge>
        </Chakra.Flex>
      </Chakra.Box>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={CreateIssueData.createIssueStyles}
        contentLabel="Create Ticket Modal"
      >
        <Chakra.Box
          p="2rem"
          className={styles.createTickets}
          onClick={openModal}
        >
          <Chakra.Flex pb="15px" justify="flexStart" align="center">
            <Chakra.Box w="50%">
              <Chakra.Text fontSize="50px"> Create An Issue </Chakra.Text>
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
          <Chakra.Text mb="8px" fontSize="15px">
            Add Image
          </Chakra.Text>

          <AddImages file={file} setFile={setFile} submitImage={submitImage} />

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
                placeholder="Details"
                resize="none"
              />
            </Chakra.Flex>
            <Chakra.Flex direction="column" pb="15px">
              <Chakra.Text mb="8px" fontSize="15px">
                Assignees
              </Chakra.Text>
              <AssigneeForm setAssignees={setAssignees} assignees={assignees} />
            </Chakra.Flex>
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
            <Chakra.Flex direction="column" pb="15px" gap="10px">
              <Chakra.Button
                type="submit"
                bg="lightGreen"
                size="sm"
                color="black"
              >
                Create Issue
              </Chakra.Button>
              <Chakra.Button
                size="sm"
                colorScheme="gray"
                variant="ghost"
                onClick={closeModal}
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
