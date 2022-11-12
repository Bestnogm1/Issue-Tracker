import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import * as authService from "./services/authService";
import styles from "./App.module.css";
import CrateTicketModel from "./components/CreateTicketModel/CreateTicketModel";
import { useUserContext } from "./contexts/UserContexts/UserContexts";

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
      <div className={styles.allRoutesComp}>
        <CrateTicketModel />
        {user ? (
          <div className={styles.navBar}>
            <NavBar user={user} handleLogout={handleLogout} />
          </div>
        ) : null}
        <div className={styles.right}>
          <Routes>
            <Route path="/" element={<Landing user={user} />} />
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
