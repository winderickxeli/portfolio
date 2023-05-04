// React
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';

// CSS
import styles from '../CSS/styles.module.css';
import ThemeContext, { bodyTheme } from '../CSS/ThemeContext';


// Web componenten
import Navbar from '../Webcomponents/Navbar';
import Sidebar from '../Webcomponents/Sidebar';
import Header from '../Webcomponents/Header';
import Footer from '../Webcomponents/Footer';
import { IAllPages } from '../Interfaces';


const Root = ({ArrAllPages}:IAllPages) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const body = document.body;
  if(theme === "Dark")
    body.style.background="#2a2c31";
  else
    body.style.background="#d5d3c5";
  return (
      <div className={styles.Container} style={theme === "Dark" ? bodyTheme.dark : bodyTheme.light}>
        <Sidebar />
        <Navbar />
        <Header ArrAllPages={ArrAllPages}/>
        <Outlet />
        <Footer />
      </div>
    )
  }

export default Root;