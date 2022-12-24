//React
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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

export default QuoteForFooter;