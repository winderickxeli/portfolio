import { NavLink } from 'react-router-dom';
import styles from '../CSS/styles.module.css'
import { useState, useEffect } from 'react';

const Footer = () => {
  const [quote, setQuote] = useState<string>("This is not the best landing page, it's just a tribute.");
  useEffect(()=>{
    const getQuote = async () => {
      let quoteApi = await(await fetch("https://api.themotivate365.com/stoic-quote")).json();
      setQuote(quote => quoteApi.quote);
    }
    getQuote();
  },[])

    return(
      <footer className={styles.Footer}>
        <NavLink to="Contact"><p>&copy; 2022 Eli Winderickx<br/>{quote}</p></NavLink>
      </footer>
    )
  }

  export default Footer;