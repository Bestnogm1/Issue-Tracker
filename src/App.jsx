import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import * as authService from "./services/authService";
import styles from "./App.module.css";
import { useUserContext } from "./contexts/UserContexts/UserContexts";
import * as Chakra from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import CrateTicketModel from "./components/CreateTicketModel/CreateTicketModel";

const App = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <>
        <SideBar user={user} handleLogout={handleLogout} />
        <Chakra.Box>
          <NavBar />
          <Chakra.Box>
            {/*  */}
            <Routes>
              <Route path="/" element={<Landing user={user} />} />
              <Route
                path="/signup"
                element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
              />
              <Route path="/createTicket" element={<CrateTicketModel />} />
              <Route
                path="/login"
                element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
              />
            </Routes>
            {/*  */}
          </Chakra.Box>
        </Chakra.Box>
      </>
    </>
  );
};

export default App;
