import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";
import * as authService from "../../services/authService";
import Quote from "../MotivationalQoute/Quote";
import * as Chakra from "@chakra-ui/react";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture: "",
    passwordConf: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    props.updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      profilePicture: createProfileImage(formData.name, formData.lastName),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  const { name, email, password, passwordConf, lastName } = formData;

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  };

  const randomHexCodeColor = () => {
    const hexCodes = ["442288", "6CA2EA", "B5D33D", "EB7D5B", "FED23F"];
    return hexCodes[Math.floor(Math.random() * 5)];
  };

  function createProfileImage(name, lastName) {
    return `https://ui-avatars.com/api/?name=${name}+${lastName}&background=${randomHexCodeColor()}`;
  }

  return (
    <>
      <div id="main-wrapper" className="container newContainer">
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
                          <h3 className="h4 font-weight-bold text-theme">
                            signUp
                          </h3>
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">First Name</label>
                          <input
                            className="form-control"
                            id="exampleInputEmail1"
                            type="text"
                            placeholder="First name"
                            autoComplete="off"
                            value={name}
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Last name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            autoComplete="off"
                            placeholder="last name"
                            id="lastName"
                            value={lastName}
                            name="lastName"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Email</label>
                          <input
                            className="form-control"
                            type="text"
                            autoComplete="off"
                            placeholder="Email"
                            id="email"
                            value={email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            className="form-control"
                            autoComplete="off"
                            id="password"
                            value={password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Confirm Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            autoComplete="off"
                            id="confirm"
                            value={passwordConf}
                            name="passwordConf"
                            onChange={handleChange}
                            placeholder="Password"
                          />
                        </div>
                        <button
                          disabled={isFormInvalid()}
                          className="btn btn-outline-secondary"
                        >
                          sign up
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay rounded-right"></div>
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">
                            This beautiful theme yours!
                          </h4>
                          <Quote />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <small>
                <li>
                  Already Have an Account?
                  <Link to="/login">
                    <Chakra.Text color="green">Login</Chakra.Text>
                  </Link>
                </li>
              </small>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
