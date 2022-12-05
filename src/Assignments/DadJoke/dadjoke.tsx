import { useEffect, useState } from 'react';
import styles from './dadjoke.module.css';

const DadJoke = () => {
  const [randomJoke, setRandomJoke] = useState<string>("I wish this was funny!");
  const [favJoke, setFavJoke] = useState<string>(localStorage.getItem("favJoke") ?? "");

  const loadJoke = async () => {
    let result = await fetch('https://icanhazdadjoke.com',{headers : {'Accept':'application/json'}});
    let dadJoke = await result.json();
    console.log(dadJoke);
    setRandomJoke(dadJoke.joke);
  }

  useEffect(() => {
    loadJoke();
  },[])

  useEffect(() => {
    localStorage.setItem("favJoke", favJoke)
  },[favJoke])

  return (
    <div className={styles.DadJokes}>
      <label>Random Joke:</label><p>{randomJoke}</p>
      <input type="button" value="Set favorite" onClick={(e) => {setFavJoke(randomJoke)}} />
      <input type="button" value="Get new joke" onClick={(e) => {loadJoke()}} />
      {
        favJoke != "" ? (<><label>Favorite Joke: </label><p>{favJoke}</p></>) : (<><label>Remember to set your favorite joke!</label></>)
      }
    </div>
  )
}


export default DadJoke;
