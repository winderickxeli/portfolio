import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from 'react-router-dom';
import Navbar from './Webcomponents/Navbar';
import Search from './Webcomponents/Search';
import Footer from './Webcomponents/Footer';
import styles from './styles.module.css';

import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum';



const Root = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Search />
      <Outlet />
      <Footer />
    </div>
  )
}

const Home = () => {
  return (
    <main className={styles.Content}>
      <h1>Hello everyone!</h1>
      <LoremIpsum p={2} />
    </main>
  )
}

const Assignments = () => {
  return (
    <main className={styles.Content}>
    <h1>Assignments</h1>
    <LoremIpsum p={1} />
    <div className={styles.AssignmentContainer}>
      <div className={styles.Assignment}>Assignment 1</div>
    </div>
    </main>
  )
}

const ExtraCredit = () => {
  return (
    <main className={styles.Content}>
      <h1>Extra Credit</h1>
      <LoremIpsum p={2} />
    </main>
  )
}

const Contact = () => {
  return (
    <main className={styles.Content}>
      <h1>Contact</h1>
      <LoremIpsum p={2} />
    </main>
  )
}

const AboutMe = () => {
  return (
    <main className={styles.Content}>
      <h1>About me...</h1>
      <p>I've been working as a system administrator for several years. During which I've seen changes in the industry. The sudden awareness that I need to adopt to a more DevOps centred mindset is just one of the reasons that made me decide to follow an IT development course at AP Highschool College.</p>
      <p></p>
    </main>
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
        path:"Me",
        element: <AboutMe />
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
