import { useState, useRef, useEffect } from 'react';

function CreateTickets({handleCreate}) {
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
        <button
          type="submit"
          className="btn btn-primary btn-fluid"
          disabled={!validForm}>
				  ADD A TICKET
				</button>
    </form>
    </>
  );
}

export default CreateTickets;