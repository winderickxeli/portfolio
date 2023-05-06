const NBB = () => {
    return(
        <main>
        <h2>Graduaat programmeren</h2>
        <p>Voor <a href="https://www.ap.be/graduaat/programmeren">de Graduaat Programmeren</a> die ik in avondtraject volg, hebben we in groep een project moeten uitwerken. Uit de selectie die we gepresenteerd kregen, had mijn groep gekozen voor het project van de Nationale Bank van België(NBB). Dit was het enigste project dat een duidelijke focus op de backend van de applicatie had. De andere topics waren leukn en kleurrijke projecten met een sterke focus op de frontend. Dat is zeker niet mijn sterkste punt. Het NBB project was dan vooral om bedrijven op te vragen bij de Nationale bank en vervolgens die gegevens te vergelijken. Gegevens moeten opgeslagen worden in een eigen databank zodat dit als geschiedenis getoont kan worden.</p>
        <img src="/images/NBBCompare.png" width="100%" />
        <p>In tegenstelling tot wat wij dachten dat de grootste uitdaging was, de backend, heeft de NBB ons verrast. Alhoewel je vrij vlot toegang kan krijgen tot hun API in hun testomgeving, documenteren ze schrikbarend weinig. Het was dus maanden aan trial and error om te zoeken;
            <ol>
                <li>Welke gegevens zij aanbieden,</li>
                <li>Hoe we die kunnen bereiken,</li>
                <li>Wanneer de API beschikbaar is</li>
                <li>En zelfs welke bedrijven we konden aanspreken</li>
            </ol>
        </p>
        <p>De backend is geschreven in C# en staat gehost in de Azure cloud als een Linux App service met een Microsoft SQLserver databank. Door middel van het MVC model dat we toepassen en Entity Framework, konden we een goed gestructureerde backend maken die eenvoudig uit te breiden is. De Front is gemaakt met Typescript en React.JS en wordt via Vercel gehost.</p>
        </main>
    )
}

export default NBB;