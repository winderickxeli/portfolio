// React
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

//Functional
import { ITweakersNewsItem, INasaPicture } from '../Interfaces';

// CSS
import styles from '../CSS/styles.module.css';

const Home = () => {
  const [tweakersNewsItems, setTweakersNewsItems] = useState<ITweakersNewsItem[]>([]);
  const [NasaPic, setNasaPic] = useState<INasaPicture>({
    copyright: "Dan Bartlett",
    date: "2022-12-24",
    explanation: "Comet C/2022 E3 (ZTF) was discovered by astronomers using the wide-field survey camera at the Zwicky Transient Facility this year in early March. Since then the new long-period comet has brightened substantially and is now sweeping across the northern constellation Corona Borealis in predawn skies. It's still too dim to see without a telescope though. But this fine telescopic image from December 19 does show the comet's brighter greenish coma, short broad dust tail, and long faint ion tail stretching across a 2.5 degree wide field-of-view. On a voyage through the inner Solar System comet 2022 E3 will be at perihelion, its closest to the Sun, in the new year on January 12 and at perigee, its closest to our fair planet, on February 1. The brightness of comets is notoriously unpredictable, but by then C/2022 E3 (ZTF) could become only just visible to the eye in dark night skies.",
    hdurl: "https://apod.nasa.gov/apod/image/2212/c2022E3_ZTF_Bartlett.png",
    media_type: "image",
    service_version: "v1",
    title: "Comet 2022 E3 (ZTF)",
    url: "https://apod.nasa.gov/apod/image/2212/c2022E3_ZTF_Bartlett800.png"
  })
  

  useEffect(() => {
    const GetTweakersNews = async () => {
      let tweakersRSS = await (await fetch("https://rss-to-json-serverless-api.vercel.app/api?feedURL=http://feeds.feedburner.com/tweakers/mixed")).json();
      let tweakersItems = await tweakersRSS.items;
      setTweakersNewsItems(news => [...tweakersItems]);
    }

    const GetNasaImg = async () => {
      let NasaFeed = await(await fetch("https://api.nasa.gov/planetary/apod?api_key=YFCJO5imlmp1jbGWe9KhBBRuggOd4eOeEMmK5Sl1")).json();
      setNasaPic({
        copyright: NasaFeed.copyright,
        date: NasaFeed.date,
        explanation: NasaFeed.explanation,
        hdurl: NasaFeed.hdurl,
        media_type: NasaFeed.media_type,
        service_version: NasaFeed.service_version,
        title: NasaFeed.title,
        url: NasaFeed.url
      })
    }

    GetNasaImg();
    GetTweakersNews();
  },[]);

    return (
      <main className={styles.Content} style={{width:"70%"}}>
        <h2>Welcome</h2>
        <p>This portfolio is part of an assignment of a course I'm attending. The course Web Frameworks is taught at AP Highschool college and teaches the React Framework. It is part of an Associate degree; Computer Programming. More information can be found on <a href="https://www.ap.be/graduaat/programmeren">the degree's page</a></p>
        <div style={{display:"flex"}}>
        <article className={styles.AsideLeft}>
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
          <article className={styles.AsideRight} style={{marginLeft:"50px"}}>
              <h3>Nasa's Astronomy picture of the day</h3>
              <h4>{NasaPic.title}</h4>
              <p>{NasaPic.explanation}</p>
              <NavLink to="Secret"><img src={NasaPic.url} width="75%" alt={NasaPic.date}/></NavLink>
              <p>&copy; {NasaPic.copyright} </p>
          </article>
          
        </div>

      </main>
    )
  }

export default Home;