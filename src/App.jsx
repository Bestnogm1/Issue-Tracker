import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import * as ticketsServices from "./services/ticketsServices";
import CreateTickets from "./pages/CreateTickets/CreateTickets";
import TicketDetail from "./pages/TicketDetail/TicketDetail";
import styles from "./App.module.css";
const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  useEffect(() => {
    ticketsServices
      .getAllTickets()
      .then((allTickets) => setTickets(allTickets));
  }, []);

  const handleCreateTickets = (newTickets) => {
    ticketsServices
      .createTickets(newTickets)
      .then((createTickets) => {
        setTickets([createTickets, ...tickets]);
        navigate("/");
      })
      .catch(navigate("/"));
  };

  const handleDeleteTicket = (id) => {
    ticketsServices
      .deleteOneTickets(id)
      .then(setTickets(tickets.filter((ticket) => ticket._id !== id)));
  };

  const completed = (_ticket) => {
    ticketsServices.completedOrNot(_ticket).then(
      setTickets(
        tickets.filter((ticket) => {
          if (ticket._id === _ticket._id) return (ticket.completed = true);
          return ticket;
        })
      )
    );
  };

  const handleGetAllLobby = () => {
    ticketsServices.getAllTickets().then((lobby) => setTickets(lobby));
  };

  return (
    <>
      {" "}
      {user ? (
        <div className={styles.navBar}>
          <NavBar user={user} handleLogout={handleLogout} />
        </div>
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              user={user}
              allTickets={tickets}
              handleDeleteTicket={handleDeleteTicket}
              handleGetAllLobby={handleGetAllLobby}
              handleCreateTickets={handleCreateTickets}
              completed={completed}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/CreateTickets"
          element={
            user ? (
              <CreateTickets
                handleGetAllLobby={handleGetAllLobby}
                handleCreate={handleCreateTickets}
                user={user}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* route to ticket/id but set up for later */}
        <Route
          path="/tickets/:ticket_id"
          element={user ? <TicketDetail /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
