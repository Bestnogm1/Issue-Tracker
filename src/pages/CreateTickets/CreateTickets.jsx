import { useState, useRef, useEffect } from "react";
import Styles from "./CreateTickets.module.css";
import * as Chakra from "@chakra-ui/react";
import AssignedToProfile from "../../components/AssignedToProfile/AssignedToProfile";
import * as profileService from "../../services/profileService";

function CreateTickets({ handleCreate }) {
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
    handleCreate({ ...formData, assignedTo: newId });
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

  return (
    <>
      <div className={Styles.createTicket}>
        <h1> Create A ticket </h1>
      </div>
      <div className={Styles.mainComponent}>
        <form
          onSubmit={handleSubmit}
          ref={formElement}
          className={Styles.createTicketForm}
        >
          <div className={Styles.subjectAndAddTicket}>
            <select
              required
              type="text"
              name="severity"
              onChange={handleChange}
              className={Styles.addTicketSeverity}
            >
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
            <div className={Styles.CreateTicketsAddATicket}>
              <Chakra.Button
                type="submit"
                colorScheme="green"
                disabled={!validForm}
              >
                ADD A TICKET
              </Chakra.Button>
            </div>
          </div>
          <div className={Styles.createTicketSubjectBody}>
            <input
              required
              type="text"
              name="subject"
              onChange={handleChange}
              placeholder="subject"
              className={Styles.createTicketSubject}
            />
            <textarea
              required
              type="text"
              name="details"
              onChange={handleChange}
              placeholder="details"
              className={Styles.createTicketDetail}
            />
          </div>
          <div className={Styles.createTicketInputBottom}>
            <div className={Styles.createTicketInputBottomLeft}>
              <div className={Styles.createTicketInputBottomLeftComp}>
                <div className={Styles.createTicketStatus}>
                  <h1>
                    <strong>Status:</strong> Open
                  </h1>
                </div>
                <div className={Styles.createTicketAssignedToInput}>
                  <AssignedToProfile
                    formData={formData}
                    handleChange={handleChange}
                    searchResults={searchResults}
                    handleProfileSelection={handleProfileSelection}
                  />
                </div>
              </div>
            </div>
            <div className={Styles.createTicketInputBottomRight}>
              <div className={Styles.createTicketSeverity}>
                <select
                  required
                  type="text"
                  name="severity"
                  onChange={handleChange}
                  className={Styles.createTicketSeverityInput}
                >
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div className={Styles.createTicketProblems}>
                <select
                  required
                  type="text"
                  name="problems"
                  onChange={handleChange}
                  className={Styles.createTicketProblemsInput}
                >
                  <option value="Software">Software</option>
                  <option value="Hardware">Hardware</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTickets;
