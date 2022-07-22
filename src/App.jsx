import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as ticketsServices from './services/ticketsServices'
import CreateTickets from './pages/CreateTickets/CreateTickets'
import dayjs from 'dayjs'
import TicketDetail from './pages/TicketDetail/TicketDetail'
// import EditTickets from './pages/EditTickets/EditTickets'
// dayjs().to(dayjs('1990-01-01')) 
const App = () => {

  const [user, setUser] = useState(authService.getUser())
  const [tickets, setTickets] = useState([])
  
  const navigate = useNavigate()
  
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  
  useEffect(()=>{ 
    ticketsServices.getAllTickets()
    .then(allTickets => setTickets(allTickets))
  },[])
  
  const handleCreateTickets = (newTickets) => {
    ticketsServices.createTickets(newTickets)
    .then(createTickets =>{
      setTickets([...tickets, createTickets])
      navigate('/')
    })
    .catch(navigate('/'))
  }
  
  const handleDeleteTicket =id =>{
    ticketsServices.deleteOneTickets(id)
    .then(setTickets(tickets.filter(ticket => ticket._id !== id)))
  }
  //createdAt: "2022-07-17T16:45:36.602Z"

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} tickets={tickets} handleDeleteTicket={handleDeleteTicket} />} />
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
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route 
        path="/CreateTickets"
        element={user ? <CreateTickets  handleCreate={handleCreateTickets}/>: <Navigate to="/login" />}
        />
        <Route
        path="/tickets/:ticket_id"
        element={user ? <TicketDetail/>: <Navigate to="/login" />}
        />

      </Routes>
    </>
  )
}

export default App
