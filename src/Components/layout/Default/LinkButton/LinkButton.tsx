import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

function LinkButton({to, text }: {to: string, text: string}) {
    return (
      <Link className={styles.btn} to={to}>
        {text}
      </Link>
    )
  }
  
  export default LinkButton