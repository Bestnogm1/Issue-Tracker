import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import * as Chakra from "@chakra-ui/react";
import * as CreateIssueData from "../../Data/CreateIssueData/CreateIssueData";
import * as profileService from "../../services/profileService";
import { useState } from "react";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
import Select from "react-select";
import "./CreateTicketModel.css";
import { useCreateTicketModelContexts } from "../../contexts/CreateTicketModelContexts/CreateTicketModelContexts";

function CrateTicketModel(props) {
  Modal.setAppElement("#root");
  // const [assignees, seTAssignees] = useState(null);
  // const [priority, setPriority] = useState(null);
  // const { handleCreateTickets } = useTicketsContext();
  const {
    openModal,
    afterOpenModal,
    closeModal,
    modalIsOpen,
    // setFormData,
    // formData,
  } = useCreateTicketModelContexts();
  const [formData, setFormData] = useState([]);
  const [testing, Settesting] = useState([]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  let name = { qwe: formData };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    Settesting({ name });
    // handleCreateTickets({ ...formData, assignedTo: "qwe", allName: name });
  };
  console.log(testing);
  return (
    <div>
      <div>
        <button onClick={openModal}> Create ticket</button>
      </div>
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
              <h1> Create An Issue </h1>
            </Chakra.Flex>

            <form onSubmit={handleSubmit}>
              <Chakra.Flex direction="column" pb="15px">
                <Chakra.Text mb="8px" fontSize="15px">
                  Issue Type
                </Chakra.Text>
                <Select
                  name="ShortSummary"
                  options={CreateIssueData.options}
                  // onChange={handleChange}
                />
              </Chakra.Flex>
              <Chakra.Flex direction="column" pb="15px">
                <Chakra.Text mb="8px" fontSize="15px">
                  Short Summary
                </Chakra.Text>
                <Chakra.Input
                  variant="filled"
                  placeholder=" Short Summary"
                  required
                  type="text"
                  name="ShortSummary"
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
                  name="Details"
                  variant="filled"
                  // onChange={handleChange}
                  placeholder="details"
                  resize="none"
                />
              </Chakra.Flex>
              <Chakra.Flex direction="column" pb="15px">
                <Chakra.Text mb="8px" fontSize="15px">
                  Assignees
                </Chakra.Text>
                <Select
                  variant="filled"
                  isMulti
                  name="Assignees"
                  options={CreateIssueData.assignees}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => setFormData(e)}
                />
              </Chakra.Flex>
              <Chakra.Flex direction="column" pb="15px">
                <Chakra.Text mb="8px" fontSize="15px">
                  Priority
                </Chakra.Text>
                <Select
                  name="Priority"
                  options={CreateIssueData.Priority}
                  // defaultValue={assignees}
                  variant="filled"
                  // value={CreateIssueData.Priority.filter((option) => {
                  //   return option.value === assignees;
                  // })}
                  // onChange={(e) => seTAssignees(e)}
                />
              </Chakra.Flex>
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
