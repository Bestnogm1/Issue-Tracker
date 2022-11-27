import axios from "axios";
import React, { createContext, useContext, useState } from "react";

import { useUserContext } from "../UserContexts/UserContexts";

const CreateTicketsModel = createContext(null);
export const useCreateTicketModelContexts = () =>
  useContext(CreateTicketsModel);

const CreateTicketModelContexts = ({ children }) => {
  const { user } = useUserContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();

  const [formData, setFormData] = useState({
    title: "",
    owner: user?.profile,
  });

  //Handle Close and open modal
  let subtitle;
  const afterOpenModal = () => (subtitle.style.color = "#f00");
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFile(null);
  };

  const submitImage = async (tempUUID) => {
    const addImage = new FormData();
    addImage.append("image", file);
    addImage.append("uuid", tempUUID);
    await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER_URL}api/tickets/addImagesToTicket`,
      addImage,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

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
        file,
        setFile,
        submitImage,
      }}
    >
      {children}
    </CreateTicketsModel.Provider>
  );
};

export default CreateTicketModelContexts;
