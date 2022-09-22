import React, { useState, useEffect, useRef } from "react";

function MessageForm({ createMessage, details }) {
  const [validForm, setValidForm] = useState(true);
  const formElement = useRef();
  const [formData, setFormData] = useState("");
  // console.log(details);
  function handleSubmit(e) {
    e.preventDefault();
    e.target[0].value = "";
    // console.log(formData);
    // console.log(details, "detail");
    createMessage(formData, details);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="messageContent"></label>
        <input
          required
          type="text"
          id="messageContent"
          placeholder="Enter message here"
          name="messages"
          maxLength="144"
          onChange={handleChange}
        />
        <button type="submit" disabled={!validForm}>
          ➤
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
