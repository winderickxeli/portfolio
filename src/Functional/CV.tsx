// React
import React, {useState, useEffect} from 'react';

// Functional


// CSS
import styles from '../CSS/styles.module.css';

const CV = () => {



    return (
      <main className={styles.Content} style={{overflow:"hidden"}}>
<p>
---
CV:
    - Personalia:
          - Naam: Eli Winderickx
          - Adres: Grote Baan 73 1/2 2235 Hulshout
          - E-mail: eli@winderickx.me
          - Geboortedatum: 09/05/1991
          - Geboorteplaats: Diest
          - Nationaliteit: Belg
    - Opleidingen:
          - PHL:
                - Opleiding: Toegepaste Informatica
                - Periode: 2009 - 2011
                - Status: Vroegtijdig beeindigd
          - PCVO Handel:
                - Opleiding: HBO-5 Netwerk en systemen
                - Periode: 2011 - 2013
                - Status: Succesvol beeindigd
          - AP Hogeschool:
                - Opleiding: Graduaat programmeren
                - Periode: 2022 - ...
                - Status: Bezig
          - EHBO:
                - Periode: 2021 / 2022 / 2023
    - Werkervaring:
          - AlfaNet:
                - Functie:
                      - Titel: firstline support webhosting
                      - Periode: 2013 - 2015
          - AP Hogeschool:
                - Functie:
                      - Titel: helpdeskmedewerker
                      - Periode: 2015 - 2017
                - Functie:
                      - Titel: systeembeheerder
                      - Periode: 2017 - ...
    - Relevante kennis:
          - Besturingsystemen:
                - RedHat / CentOS / Rocky Linux / Fedora: DNF, Yum
                - Debian / Ubuntu / Linux Mint: Apt
          - Systemen:
                - Zabbix: Goed
                - Ansible: Goed
                - NginX: Goed
          - Talen:
                - Nederlands: Moedertaal
                - Engels: Goed
                - Frans: Noties
                - Duits: Noties
                - C#: Goed
                - Typescript: Goed
                - Python: Noties
...

</p>
      </main>
    )
  }

export default CV;