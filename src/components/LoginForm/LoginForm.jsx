import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.module.css'
import * as authService from '../../services/authService'
import Quote from '../MotivationalQoute/Quote'
import { Button }  from 'react-bootstrap';
const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

return (
<>
    <div id="main-wrapper" className="container">
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    className="text-center border border-light p-5"
    >
      <div className="row justify-content-center">
          <div className="col-xl-10">
              <div className="card border-0">
                  <div className="card-body p-0">
                      <div className="row no-gutters">
                          <div className="col-lg-6">
                              <div className="p-5">
                                  <div className="mb-5">
                                      <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                  </div>
                                  <h6 className="h5 mb-0">Welcome back!</h6>
                                  
                                      <div className="form-group">
                                          <label for="exampleInputEmail1">Email address</label>
                                          <input  className="form-control" id="exampleInputEmail1"
                                            type="text"
                                            autoComplete="off"
                                            value={formData.email}
                                            name="email"
                                            onChange={handleChange}
                                          />
                                      </div>
                                      <div className="form-group mb-5">
                                          <label for="exampleInputPassword1">Password</label>
                                          <input className="form-control"          
                                          type="password"
                                          autoComplete="off"
                                          id="password"
                                          value={formData.pw}
                                          name="pw"
                                          onChange={handleChange}
                                          />
                                      </div>
                                      <Button type="submit" className="btn btn-theme">Login</Button>
                                  
                              </div>
                          </div>
                          <div className="col-lg-6 d-none d-lg-inline-block">
                              <div className="account-block rounded-right">
                                  <div className="overlay rounded-right"></div>
                                  <div className="account-testimonial">
                                      <Quote/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
     <small><li>Don't have an account<Link to="/signup"> Sign up </Link></li></small>
          </div>
      </div>
    </form>
</div>
</>
  )
}

export default LoginForm
