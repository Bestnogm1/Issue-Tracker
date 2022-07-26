import { useState, useRef, useEffect } from 'react';

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
        <form 
      onSubmit={handleSubmit}
      ref={formElement}>
        <input 
          required
          type="text"
          name="assingedTo" 
          onChange={handleChange}
        />
        <input 
          required
          type="text"
          name="details"
          onChange={handleChange}
        />
          <select        
          required
          type="text"
          name="severity" 
          onChange={handleChange}>
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
    </>
  );
}

export default CreateTickets;