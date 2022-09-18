import { useState, useRef, useEffect } from "react";
import Styles from "./CreateTickets.module.css";
import * as Chakra from "@chakra-ui/react";

function CreateTickets({ handleCreate, handleGetAllLobby }) {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreate(formData);
  };
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
                  <input
                    required
                    type="text"
                    name="assingedTo"
                    onChange={handleChange}
                    placeholder="assingedTo"
                    className={Styles.createTicketAssignedTo}
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
