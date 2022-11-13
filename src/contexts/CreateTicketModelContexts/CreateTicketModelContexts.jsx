import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "../UserContexts/UserContexts";

const CreateTicketsModel = createContext(null);
export const useCreateTicketModelContexts = () =>
  useContext(CreateTicketsModel);

const CreateTicketModelContexts = ({ children }) => {
  const { user } = useUserContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    shortSummary: "",
    description: "",
    priority: "",
    assignees: "",
    owner: user?.profile,
  });
  let subtitle;
  const afterOpenModal = () => (subtitle.style.color = "#f00");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
};

export default CreateTicketModelContexts;
