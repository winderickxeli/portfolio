//React
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//CSS
import styles from '../CSS/styles.module.css';
import ThemeContext from '../CSS/ThemeContext';
import { IAllPages } from '../Interfaces';

const Header = ({ArrAllPages}:IAllPages) =>{
  const {theme,setTheme} = useContext(ThemeContext);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  let themeIcon:string;

  theme === "Dark" ? themeIcon="☀" : themeIcon = "☽";

  const SearchFor = (searchtext:string) => {
    setSearch(text => searchtext);

    let foundpage: string = ArrAllPages
    .filter(page => page.toUpperCase().includes(search.toUpperCase()))[0];

      if(foundpage === "Home")
        foundpage = "";
      navigate(`/${foundpage}`);
  }

  return(
    <header className={styles.Header}>
      <h1>Eli Winderickx</h1>
      <input type="button" value={themeIcon} onClick={()=>{
        if(theme === "Dark")
          setTheme('Light');
        else
          setTheme('Dark');
      }}/>
      <input list='pages' type="list" value={search} onSelect={(e)=>{SearchFor(search)}} style={theme === "Dark" ? {backgroundColor:"none"} : { backgroundColor: "white", color : "black"}} onChange={(e)=>{SearchFor(e.target.value)}}/>
        <datalist id="pages">
          {
            ArrAllPages
              .filter(page => page.toUpperCase().includes(search.toUpperCase()))
              .map((page, index) => <option id={page}>{page}</option>)
          }
        </datalist>
    </header>
  )
  }

export default Header;