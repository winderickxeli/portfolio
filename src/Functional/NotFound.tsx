import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <h1>Not found!</h1>
            <p>Hiya! Seems to me you took a wrong turn. Let me get you back or use the searchbar to find the missing component!</p>
            <NavLink to="/">TAKE ME BACK!!</NavLink>
        </main>   
    )
}

export default NotFound;