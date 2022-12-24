// React
import {useState, useEffect} from 'react';

// Functional
import { ITweakersNewsItem } from "../../Interfaces";

// CSS
import styles from '../../CSS/styles.module.css';

const Tweakers = () => {
    const [tweakersNewsItems, setTweakersNewsItems] = useState<ITweakersNewsItem[]>([]);

    useEffect(() => {
        const GetTweakersNews = async () => {
            let tweakersRSS = await (await fetch("https://rss-to-json-serverless-api.vercel.app/api?feedURL=http://feeds.feedburner.com/tweakers/mixed")).json();
            let tweakersItems = await tweakersRSS.items;
            setTweakersNewsItems(news => [...tweakersItems]);
          }
        GetTweakersNews();

    },[]);


    return(
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
    )
}

export default Tweakers;