import { useState, useRef, useEffect } from 'react';
import Styles from "./CreateTickets.module.css"
function CreateTickets({handleCreate, handleGetAllLobby}) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState('')

    useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleCreate(formData)
  }
  return (
    <>
    <div>
      <h1> Create A ticket </h1>
    </div>
      <div className={Styles.mainComponent}>
        <form 
          onSubmit={handleSubmit}
          ref={formElement}>
          <div className={Styles.subjectAndAddTicket}>
            <input 
              required
              type="text"
              name="subject" 
              onChange={handleChange}
              placeholder="subject"
              className={Styles.subject}
            />
            <button
              type="submit"
              className="btn btn-primary btn-fluid"
              disabled={!validForm}>
                ADD A TICKET
            </button>
          </div>
          <div>
            <input 
              required
              type="text"
              name="details"
              onChange={handleChange}
              placeholder="details"
              className={Styles.detail}
            />
          </div>
          <div>
            <input 
              required
              type="text"
              name="assingedTo" 
              onChange={handleChange}
              placeholder="assingedTo"
              className={Styles.assignedTo}
            />
            <select        
              required
              type="text"
              name="severity" 
              onChange={handleChange}>
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Urgent">Urgent</option>
            </select>
            <select        
              required
              type="text"
              name="problems" 
              onChange={handleChange}>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTickets;