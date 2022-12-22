// React
import { useEffect, useState } from 'react';

//Functional
import { ITweakersNewsItem, IComic } from '../Interfaces';

// CSS
import styles from '../CSS/styles.module.css';

const Home = () => {
  const [tweakersNewsItems, setTweakersNewsItems] = useState<ITweakersNewsItem[]>([]);
  const [quote, setQuote] = useState<string>("This is not the best landing page, it's just a tribute.");
  const [comic, setComic] = useState<IComic>({
    title:"Empty",
    alt:"We got no comic",
    img:"https://imgs.xkcd.com/comics/woodpecker.png"
  });
  

  useEffect(() => {
    const getTweakersNews = async () => {
      let tweakersRSS = await (await fetch("https://rss-to-json-serverless-api.vercel.app/api?feedURL=http://feeds.feedburner.com/tweakers/mixed")).json();
      let tweakersItems = await tweakersRSS.items;
      setTweakersNewsItems(news => [...tweakersItems]);
    }

    const getQuote = async () => {
      let quoteApi = await(await fetch("https://api.themotivate365.com/stoic-quote")).json();
      setQuote(quote => quoteApi.quote);
    }

    const GetRandomComic = async () => {
      //fetch("https://api.factmaven.com/xml-to-json?xml=https://xkcd.com/atom.xml"
      let XkcdComic = await(await fetch("https://xkcd.com/info.0.json", 
      {
        method: 'GET',
        mode: 'no-cors',
      })).json();
      
      setComic({
        title: XkcdComic.title,
        alt: XkcdComic.alt,
        img: XkcdComic.img
      })
      console.log(XkcdComic);
    }

    GetRandomComic();
    getTweakersNews();
  },[]);

    return (
      <main className={styles.Content}>
        <h2>Welcome</h2>
        <p>This portfolio is part of an assignment of a course I'm attending. The course Web Frameworks is taught at AP Highschool college and teaches the React Framework. It is part of an Associate degree; Computer Programming. More information can be found on <a href="https://www.ap.be/graduaat/programmeren">the degree's page</a></p>
        <article>
        <h3>Latest by <a href="https://tweakers.net">Tweakers.net</a></h3>
          <table width="100%">
            <tbody>
          {tweakersNewsItems
            .map((item, index) => 
              index < 10 && <tr key={index}><td><a href={item.link}>{index + 1}. {item.title}</a></td></tr>
          )}
          </tbody>
          </table>
        </article>
        <article>
            <h3>Latest XKCD comic</h3>
            {<img src={comic.img} />}
        </article>
      </main>
    )
  }

export default Home;