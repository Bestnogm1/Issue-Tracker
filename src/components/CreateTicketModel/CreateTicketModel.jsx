import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import * as Chakra from "@chakra-ui/react";
import AssignedToProfile from "../AssignedToProfile/AssignedToProfile";
import * as profileService from "../../services/profileService";
import { useState } from "react";
import { useTicketsContext } from "../../contexts/TicketsContexts/TicketsContext";
// import Styles from "./CreateTickets.module.css";
// import Styles from "./CreateTicket.module.css";
// import CreateTickets from "../../pages/CreateTickets/CreateTickets";
function CrateTicketModel(props) {
  const { handleCreateTickets } = useTicketsContext();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40rem",
      height: "40rem",
    },
  };
  Modal.setAppElement("#root");

  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  let [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({ assignedTo: "" });
  const [getAllProfile, setGetAllProfile] = useState([]);
  const allProfile =
    getAllProfile?.map((profile) => profile.name.toLowerCase()) ?? [];

  function getOneProfile(profileName) {
    const correctName = getAllProfile.find((profile) => {
      return profile.name.toLowerCase() === profileName.toLowerCase();
    });
    return correctName._id;
  }

  // useEffect(() => {
  //   formElement.current.checkValidity()
  //     ? setValidForm(true)
  //     : setValidForm(false);
  // }, [formData]);

  useEffect(() => {
    profileService
      .getAllProfiles()
      .then((profiles) => setGetAllProfile(profiles));
  }, []);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!allProfile.includes(formData.assignedTo.toLowerCase())) {
      return alert("Please Choose A Valid Name");
    }
    const newId = getOneProfile(formData.assignedTo);
    handleCreateTickets({ ...formData, assignedTo: newId });
  };

  function handleProfileSelection(e) {
    setFormData({ ...formData, assignedTo: e.target.textContent });
  }

  useEffect(() => {
    let searchedProfile = getAllProfile.filter((profile) => {
      if (!formData.assignedTo) return false;
      if (profile.name.toLowerCase() === formData.assignedTo) return false;
      if (profile.name.toLowerCase().includes(formData.assignedTo)) return true;
      return false;
    });
    setSearchResults(searchedProfile);
  }, [formData, getAllProfile]);

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
  }
  return (
    <div>
      <div>
        <button onClick={openModal}> Create ticket</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Create Ticket"
      >
        <>
          <Chakra.Box>
            <Chakra.Flex pb="30px" fontSize="25px">
              <h1> Create An Issue </h1>
            </Chakra.Flex>
            <form onSubmit={handleSubmit} ref={formElement}>
              <Chakra.Text mb="8px" fontSize="15px">
                Summary
              </Chakra.Text>
              <Chakra.Input
                mb="20px"
                variant="filled"
                placeholder="Summary"
                required
                type="text"
                name="Summary"
                onChange={handleChange}
              />
              <Chakra.Text fontSize="15px" mb="8px">
                Description
              </Chakra.Text>
              <Chakra.Input
                mb="20px"
                variant="filled"
                placeholder="Description"
                required
                type="text"
                name="Description"
                onChange={handleChange}
              />
              <Chakra.Select
                required
                type="text"
                name="Issue"
                onChange={handleChange}
                mb="20px"
              >
                <option value="Task">Task</option>
                <option value="Bug">Bug</option>
                <option value="Story">Story</option>
              </Chakra.Select>
              <Chakra.Textarea
                required
                type="text"
                name="Details"
                variant="filled"
                onChange={handleChange}
                placeholder="details"
                resize="none"
              />
              <AssignedToProfile
                formData={formData}
                handleChange={handleChange}
                searchResults={searchResults}
                handleProfileSelection={handleProfileSelection}
              />
              <Chakra.Select
                mb="20px"
                required
                type="text"
                name="Priority"
                onChange={handleChange}
                selectedOptionStyle="check"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Urgent">Urgent</option>
              </Chakra.Select>
              <Chakra.Button
                type="submit"
                colorScheme="green"
                disabled={!validForm}
                size="sm"
              >
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
            </form>
          </Chakra.Box>
        </>
      </Modal>
    </div>
  );
}

export default CrateTicketModel;
