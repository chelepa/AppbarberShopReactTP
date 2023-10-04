import styles from './LinkIcon.module.css'
import { Link } from 'react-router-dom'

function LinkIcon({to, IconEdit}: {to: string, IconEdit: string}) {
    return (
      <Link className={styles.btn} to={to}>
        <img src={IconEdit} alt="Costs" />
      </Link>
    )
  }
  
  export default LinkIcon