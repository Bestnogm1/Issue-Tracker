import Modal from "react-modal";
import { useState } from "react";
import { useCreateTicketModelContexts } from "../../contexts/CreateTicketModelContexts/CreateTicketModelContexts";
import AssigneeForm from "../AssigneeForm/AssigneeForm";
import Select from "react-select";
import * as Chakra from "@chakra-ui/react";
import * as CreateIssueData from "../../Data/CreateIssueData/CreateIssueData";
import "./CreateTicketModel.css";
import { createTickets } from "../../services/ticketsServices";
import { Icon } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function CrateTicketModel(props) {
  Modal.setAppElement("#root");

  //UseState
  const [issueType, setIssueType] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const [priority, setPriority] = useState([]);

  //useCreateTicketModelContexts
  const {
    openModal,
    afterOpenModal,
    closeModal,
    modalIsOpen,
    setFormData,
    formData,
  } = useCreateTicketModelContexts();

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
    };
    createTickets({ ...formData, ...submit });
  };

  return (
    <div>
      <div>
        <Chakra.Box>
          <Icon
            as={IoMdAdd}
            color="white"
            aria-label="Call Sage"
            fontSize="55px"
            onClick={() => openModal()}
          />
          <Chakra.Badge variant="outline" fontSize="10px" color="white">
            Add Ticket
          </Chakra.Badge>
        </Chakra.Box>
      </div>

      {/*  */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={CreateIssueData.createIssueStyles}
        ariaHideApp={false}
        contentLabel="Create Ticket"
      >
        <>
          <Chakra.Box>
            <Chakra.Flex pb="15px" fontSize="25px">
              <Chakra.Box width="50%">
                <h1> Create An Issue </h1>
              </Chakra.Box>
              <Chakra.Flex width="50%" justifyContent="flex-end">
                <Chakra.CloseButton size="lg" onClick={() => closeModal()} />
              </Chakra.Flex>
            </Chakra.Flex>

            {/*   */}
            <form onSubmit={handleSubmit}>
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
                  Short Summary
                </Chakra.Text>
                <Chakra.Input
                  variant="filled"
                  placeholder=" Short Summary"
                  required
                  type="text"
                  name="shortSummary"
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
                <AssigneeForm
                  setAssignees={setAssignees}
                  assignees={assignees}
                />
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
                  onClick={() => closeModal()}
                >
                  Cancel
                </Chakra.Button>
              </Chakra.Flex>
            </form>
          </Chakra.Box>
        </>
      </Modal>
    </div>
  );
}

export default CrateTicketModel;
