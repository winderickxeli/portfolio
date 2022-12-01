import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from 'react-router-dom';
import './App.css';
import './Navbar.module.css';
import './Search.module.css';

const Navbar = () => {
  return(
    <nav className='Navbar'>
        <NavLink className="NavLink" to="/">
          <img src={require("./images/ProfilePic.jpg")} alt="Profile picture" />
        </NavLink>
        <NavLink className="NavLink" to="/">About me</NavLink>
        <NavLink className="NavLink" to="Assignments">Assignments</NavLink>
        <NavLink className="NavLink" to="ExtraCredit">Extra credits</NavLink>
        <NavLink className="NavLink" to="Contact">Contact me</NavLink>
    </nav>
  );
}

const Root = () => {
  return (
    <body className='App'>
      <div className='Nav'><Navbar /></div>
      <div className='Search'><Search /></div>
      <div className='Content'><Outlet /></div>
      <div className='Footer'><Footer /></div>
    </body>
  )
}

const Home = () => {
  return (
    <main>
      <h1>Hello everyone!</h1>
      <p>Welcome to my portfolio. I hope you find what you're looking for in these pages. If you're interested, leave a message and I'll get back to you.</p>
    </main>
  )
}

const Assignments = () => {
  return (
    <>Assignments</>
  )
}

const ExtraCredit = () => {
  return (
    <>ExtraCredit</>
  )
}

const Contact = () => {
  return (
    <>Contact</>
  )
}

const Search = () =>{
  return(
    <div className='Search'>
      <input type="text" value="Search here"/>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <p>&copy; 2022 Eli Winderickx</p>
    </div>
  )
}

const AboutMe = () => {
  return (
    <article>
      <h1>About me...</h1>
      <p>I've been working as a system administrator for several years. During which I've seen changes in the industry. The sudden awareness that I need to adopt to a more DevOps centred mindset is just one of the reasons that made me decide to follow an IT development course at AP Highschool College.</p>
      <p></p>
    </article>
  )
}

const App = () => {
const router = createBrowserRouter([
  {
  path: "/",
  element: <Root/>,
  children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Assignments",
        element: <Assignments />
      },
      {
        path: "ExtraCredit",
        element: <ExtraCredit />
      },
      {
        path: "Contact",
        element: <Contact />
      }
  ]
}])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
