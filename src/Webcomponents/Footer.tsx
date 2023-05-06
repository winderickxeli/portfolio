// React
import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Functional
import ThemeContext from '../CSS/ThemeContext';

// CSS
import styles from '../CSS/styles.module.css'

const QuoteForFooter = () => {
  const [quote, setQuote] = useState<string>("This is not the best landing page, it's just a tribute.");
  useEffect(()=>{
    const getQuote = async () => {
      let quoteApi = await(await fetch("https://api.themotivate365.com/stoic-quote")).json();
      setQuote(quote => quoteApi.quote);
    }
    getQuote();
  },[])

  return(
      <NavLink to="Contact"><p>&copy; 2022 Eli Winderickx<br/>{quote}</p></NavLink>
  )
}

const Footer = () => {
  const {theme,setTheme} = useContext(ThemeContext);
    return(
      <footer className={styles.Footer} >
        <QuoteForFooter/>
      </footer>
    )
  }

  export default Footer;


