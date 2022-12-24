// React
import { useContext } from 'react';

// Functional
import QuoteForFooter from '../Functional/Extras/Quote';
import ThemeContext from '../CSS/ThemeContext';

// CSS
import styles from '../CSS/styles.module.css'

const Footer = () => {
  const {theme,setTheme} = useContext(ThemeContext);
    return(
      <footer className={styles.Footer} >
        <QuoteForFooter/>        
      </footer>
    )
  }

  export default Footer;