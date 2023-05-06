import { useEffect, useState } from 'react';
import styles from './dadjoke.module.css';

const DadJoke = () => {
  const [randomJoke, setRandomJoke] = useState<string>("Loading...I wish this was funny!");
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
    <main>
      <h2>Dad Jokes</h2>
      <p>Het moet niet allemaal serieus zijn. Deze webapplicatie was ookspronkelijk gemaakt als opdracht tijdens mijn lessen. Dit was een onderdeel daarvan. Geniet!</p>
      <img src='/images/smiley.png' width="100%"/>
      <div className={styles.DadJokes}>
        <label>Random Joke:</label><p>{randomJoke}</p>
        <input type="button" value="Set favorite" onClick={(e) => {setFavJoke(randomJoke)}} />
        <input type="button" value="Get new joke" onClick={(e) => {loadJoke()}} />
        {
          favJoke != "" ? (<><label>Favorite Joke: </label><p>{favJoke}</p></>) : (<><label>Remember to set your favorite joke!</label></>)
        }
      </div>
    </main>
  )
}


export default DadJoke;
