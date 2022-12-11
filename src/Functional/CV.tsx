import styles from '../styles.module.css';

const CV = () => {
    return (
      <main className={styles.Content}>
        <h2>Curiculum Vitae</h2>
        <h3>Experience</h3>
        <ol>
            <li>2013 - 2015: AlfaNet: Servicedesk engineer</li>
            <li>2015 - 2017: AP Hogeschool: Servicedesk engineer</li>
            <li>2017 - Current: AP Hogeschool: System administrator</li>
        </ol>
        <h3>Education</h3>
        <ol>
            <li>2009 - 2012: Provinciale Hogeschool Limburg: Toegepaste Informatica</li>
            <li>2012 - 2014: PCVO Handel: HBO5 Informatica optie Netwerken</li>
            <li>2021 - Current: AP Hogeschool: Graduaat Programmeren</li>
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
            <li>Linux desktop (Fedora Project)</li>
            <li>Music</li>
            <li>Casual Gaming</li>
        </ul>
      </main>
    )
  }

export default CV;