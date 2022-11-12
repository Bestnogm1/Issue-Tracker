import React, { createContext, useContext, useEffect, useState } from "react";
const CreateTicketsModel = createContext(null);
export const useCreateTicketModelContexts = () =>
  useContext(CreateTicketsModel);

function CreateTicketModelContexts({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    issue: "",
    shortSummary: "",
    description: "",
    priority: "",
    assignees: "",
  });
  // const [issue, setIssue] = useState("");
  // const [shortSummary, setShortSummary] = useState("");
  // const [description, setDescription] = useState("");
  // const [priority, setPriority] = useState([]);
  // const [assignees, seAssignees] = useState("");
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CreateTicketsModel.Provider
      value={{
        openModal,
        afterOpenModal,
        closeModal,
        modalIsOpen,
        formData,
        setFormData,
      }}
    >
      {children}
    </CreateTicketsModel.Provider>
  );
}

export default CreateTicketModelContexts;
