import styles from '../styles.module.css';

const Header = () =>{
    return(
      <header className={styles.Header}>
        <h1>Eli Winderickx</h1>
        <input type="text" value="Search here"/>
      </header>
    )
  }

export default Header;