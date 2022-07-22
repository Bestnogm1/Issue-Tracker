import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'react-bootstrap'
import DashBoard from  '../DashBoard/DashBoard'
import * as Chakra from '@chakra-ui/react'
const Landing = ({ user,tickets,handleDeleteTicket }) => {
  return (
    <main className={styles.container}>
      <> {user ? 
      <>
      <h1>{user.name}</h1>
        <DashBoard
        tickets={tickets}
          handleDeleteTicket={handleDeleteTicket}
        />
      </>
      : 
        <>
        <Bootstrap.Card> 
          <div>
            <div>
              
              <Link to='/signup'><Bootstrap.Button>Signup</Bootstrap.Button> </Link>
              <Link to='/login'><Bootstrap.Button>login</Bootstrap.Button> </Link>
            </div>
          </div>
        </Bootstrap.Card>
        </>
    }
    </>
    </main>
  )
}

export default Landing
