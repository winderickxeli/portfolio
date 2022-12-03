import React, { Children, useEffect, useState } from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink, useNavigate} from 'react-router-dom';

// Web componenten
import Navbar from './Webcomponents/Navbar';
import Search from './Webcomponents/Search';
import Footer from './Webcomponents/Footer';

// Assignments
import ColorSelect from './Assignments/color-select';
import AssignmentHome from './Assignments/assignmentHome';

// CSS
import styles from './styles.module.css';

// Temp imports
import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum';

interface IAssignments {
  ArrAssignments:string[]
}

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

const Assignments = ({ArrAssignments}:IAssignments) => {
  const [selectedAssignment, setSelectedAssignment] = useState<string>("Home");
  const navigate = useNavigate();
  const changeAssignment = (e:React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  }

  return (
    <main className={styles.Content}>
      <h1>Assignments</h1>
      <select onChange={(e) => changeAssignment(e)}>
        <option value="Home">Kies een opdracht</option>
        {ArrAssignments.map((a,i) => <option key={i} value={a}><NavLink to={a}>{a}</NavLink></option>)}
      </select>
      <Outlet />
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

  const ArrAssignments:string[] = ["color-select"];

  useEffect(() => {
    document.title = "Eli Winderickx";
  },[]);

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
        element: <Assignments ArrAssignments={ArrAssignments}/>,
        children: [
          {
            path:"Home",
            element: <AssignmentHome />
          },
          {
            path:"color-select",
            element: <ColorSelect />
          }
        ]
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
