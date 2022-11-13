import React, { useState } from "react";
import Modal from "react-modal";
import * as Chakra from "@chakra-ui/react";

function Window({ name, id }) {
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
  Modal.setAppElement("body");

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
      <Chakra.Badge onClick={openModal}> View More</Chakra.Badge>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Chakra.Badge onClick={closeModal}>close</Chakra.Badge>
        <form>
          <div>{name}</div>
          <div>{id}</div>
          <input type="text" />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default Window;
