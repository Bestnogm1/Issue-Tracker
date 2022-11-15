import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "../UserContexts/UserContexts";

const CreateTicketsModel = createContext(null);
export const useCreateTicketModelContexts = () =>
  useContext(CreateTicketsModel);

const CreateTicketModelContexts = ({ children }) => {
  const { user } = useUserContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    assignees: "",
    owner: { name: user?.name },
  });
  let subtitle;
  const afterOpenModal = () => (subtitle.style.color = "#f00");
  const openModal = () => setIsOpen(true);

  return (
    <CreateTicketsModel.Provider
      value={{
        setIsOpen,
        openModal,
        afterOpenModal,
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
