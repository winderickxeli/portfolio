// CSS
import styles from '../CSS/styles.module.css';

const CV = () => {
    return (
      <main className={styles.Content} style={{overflow:"hidden"}}>
        <h2>Curiculum Vitae</h2>
        <h3>Experience</h3>
        <ol>
            <li><a href="https://www.alfanet.be/">2013 - 2015: AlfaNet bvba: Servicedesk engineer</a></li>
            <li><a href="https://www.ap.be">2015 - 2017: AP Hogeschool: Servicedesk engineer</a></li>
            <li><a href="https://www.ap.be">2017 - Current: AP Hogeschool: System administrator</a></li>
        </ol>
        <h3>Education</h3>
        <ol>
            <li><a href="https://www.pxl.be/toegepaste-informatica">2009 - 2012: Provinciale Hogeschool Limburg: Toegepaste Informatica</a></li>
            <li><a href="https://www.pxl.be/informatica-systemen-en-netwerken">2012 - 2014: PCVO Handel: HBO5 Informatica optie Netwerken</a></li>
            <li><a href="https://www.ap.be/graduaat/programmeren">2021 - Current: AP Hogeschool: Graduaat Programmeren</a></li>
        </ol>
        <h3>Languages</h3>
        <ul>
            <li>Dutch</li>
            <li>English</li>
            <li>German</li>
        </ul>
        <h3>Coding skills</h3>
        <ul>
            <li>Typescript (React, NPM)</li>
            <li>.NET 6 C# (OOP, ASP.NET, MVC, TDD)</li>
            <li>SQL (MySQL/MariaDB)</li>
            <li>Powershell</li>
        </ul>
        <h3>Other interests</h3>
        <ul>
            <li><a href="https://getfedora.org/">Linux desktop (Fedora Project)</a></li>
            <li>Music</li>
            <li>Casual Gaming</li>
        </ul>
      </main>
    )
  }

export default CV;