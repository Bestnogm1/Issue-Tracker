import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <> {user ? user.name 

      : 
      <div>
        <h1> <Link to="/login"> login </Link> </h1> 
        <h1> <Link to="/signup"> login </Link> </h1> 
      
      </div>

      }
      </>
    </main>
  )
}

export default Landing
