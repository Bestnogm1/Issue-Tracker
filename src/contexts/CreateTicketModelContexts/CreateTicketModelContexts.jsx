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

  //Handle Close and open modal
  let subtitle;
  const afterOpenModal = () => (subtitle.style.color = "#f00");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CreateTicketsModel.Provider
      value={{
        setIsOpen,
        openModal,
        afterOpenModal,
        modalIsOpen,
        formData,
        setFormData,
        closeModal,
      }}
    >
      {children}
    </CreateTicketsModel.Provider>
  );
};

export default CreateTicketModelContexts;
