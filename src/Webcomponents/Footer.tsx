// Functional
import QuoteForFooter from '../Functional/Extras/Quote';

// CSS
import styles from '../CSS/styles.module.css'

const Footer = () => {
    return(
      <footer className={styles.Footer}>
        <QuoteForFooter/>        
      </footer>
    )
  }

  export default Footer;