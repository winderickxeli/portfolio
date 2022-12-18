//React
import { useContext } from 'react';

//CSS
import styles from '../CSS/styles.module.css';
import ThemeContext from '../CSS/ThemeContext';

const Header = () =>{
  const {theme,setTheme} = useContext(ThemeContext);
  let themeIcon:string;

  theme === "Dark" ? themeIcon="☀" : themeIcon = "☽";

  return(
    <header className={styles.Header}>
      <h1>Eli Winderickx</h1>
      <input type="button" value={themeIcon} onClick={()=>{
        if(theme === "Dark")
          setTheme('Light');
        else
          setTheme('Dark');
      }}/>
      <input type="text" value="Search here" style={theme === "Dark" ? { color : "white"} : { color : "black"}}/>
    </header>
  )
  }

export default Header;