# README
## Bedankt
Eerst en vooral moet ik mijn lector bedanken voor de vele uren les die hij piekfijn voorzien heeft. Dat werd onderbouwd met een heel [interessante cursus](https://similonap.github.io/webframeworks-cursus/) die ongetwijfeld ook veel bloed, zweet en tranen heeft gekost. Bedankt [mr Andie Similon](https://github.com/similonap)! Hopelijk kunnen we in de toekomst nog samen werken aan andere projecten.

## De Single Page Application: Portfolio
De site is gemaakt in Typescript en React.JS en wordt gehost via [Vercel](vercel.com).

### Componenten
De React site is onderverdeeld onder verschillende componenten. De Webcomponents zijn de bouwblokken van de site zelf. De onderdelen die steeds zullen terugkomen: Header, navigatie, footer en sidebar. Daarnaast heb ik een CSS map met mijn font en het belangrijkste CSS bestand. 

Onder Functional staat dan de inhoud van de site. De Assignments zijn dan de opdrachten die we in de les hebben gemaakt. Meestal zijn dit losse bestanden. Als er meerdere bestanden samen horen bij een component, staan deze verzameld in een map.

De content onder Functional en Assignments kan bereikt worden door de React Router die gebruikt wordt in het project. De zoekbalk bovenaan de site kan verder ook gebruikt worden om deze pagina's terug te vinden.

### Contact
Het contactformulier maakt gebruik van [Email.JS](https://www.emailjs.com/) en is beveiligd met [een Captcha van Google](https://developers.google.com/recaptcha/). Mails worden verstuurd naar mijn persoonlijk adres.

### Context
Als context heb ik gekozen voor een theme switch. Alhoewel weinig origineel, is het wel een degelijke implementatie.

### Extra componenten
Er zijn vier publieke API's die aangeroepen worden. Deze zijn ook gegroepeerd onder `Functional\Extras` om makkelijk terug te vinden
- Tweakers nieuws => Home pagina
- Stoic quote => Footer
- Nasa ASOD => Home pagina
- SpaceX => Secret pagina
