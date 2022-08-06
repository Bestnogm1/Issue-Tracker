import { useState, useRef, useEffect } from 'react';
import * as Chakra from '@chakra-ui/react'
function CreateTickets({handleCreate, handleGetAllLobby,user}) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState('')
  const [getUser, setGetUser] = useState('')

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
      <h1>Add a Ticket</h1>
      <div>
        <form
        onSubmit={handleSubmit}
        ref={formElement}>
          <div>
          <input 
          required
          placeholder="Subject"
          type="text"
          name="subject" 
          onChange={handleChange}
        />
        <input 
          required
          placeholder="details"
          type="text"
          name="details"
          onChange={handleChange}
        />
        </div>
        <h1><strong>Status</strong> open</h1>
        <input 
          required
          type="text"
          placeholder="assigned to"
          name="assingedTo" 
          onChange={handleChange}
        />
          <select        
          required
          type="text"
          name="severity" 
          onChange={((e)=>{handleChange()})}>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
          <select        
            required
            type="text"
            name="problems" 
            onChange={handleChange}>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
          </select>
        <button
          type="submit"
          className="btn btn-primary btn-fluid"
          disabled={!validForm}>
				  ADD A TICKET
				</button>
    </form>
    </div>
    </div>
    </>
  );

}

export default CreateTickets;