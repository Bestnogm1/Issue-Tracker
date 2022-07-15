import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'react-bootstrap'
const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <> {user ? user.name 
      : 
        <>
        <Bootstrap.Card> 
          <div>
            <div>
              <h1>Welcome</h1>
            </div>
            <div>
              
              <Link to='/signup'><Bootstrap.Button>Signup</Bootstrap.Button> </Link>
              <Link to='/login'><Bootstrap.Button>Signup</Bootstrap.Button> </Link>
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
