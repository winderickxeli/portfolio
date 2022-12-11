import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

interface IComic {
  title:string,
  alt:string,
  img: string
}

const Home = () => {
  const [comic, setComic] = useState<IComic>({
    title:"Empty",
    alt:"We got no comic",
    img:""
  });
  
  useEffect(() => {
    const GetRandomComic = async () => {
      let Latest = await fetch("https://xkcd.com/info.0.json", {
        method: 'GET',
        mode: "no-cors",
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        }});
      console.log(Latest.json());
      let last = await Latest.json();
/*       let numberofComics = await parseInt(last.num);
      let random = Math.floor(Math.random() * numberofComics + 1);
      console.log(`https://xkcd.com/${random}/info.0.json`);
      let result = await fetch(`https://xkcd.com/${random}/info.0.json`, {mode: "no-cors"});
      let randomcomic = await result.json(); */
      setComic({
        title:last.title,
        alt:last.alt,
        img:last.img
      })
    }
    //GetRandomComic();
  },[]);

    return (
      <main className={styles.Content}>
        <h2>Welcome</h2>
        <article style={{width:"49%"}}>This is not the best landing page, it's just a tribute.</article>
        {/* <img src={comic.img} alt={comic.alt} width={"49%"}/> */}
      </main>
    )
  }

export default Home;