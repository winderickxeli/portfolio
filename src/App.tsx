// React
import React, { Children, useEffect, useState } from 'react';
import {Router, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Functional componenten
import Root from './Functional/Root';
import Portfolio from './Functional/Portfolio';
import NotFound from './Functional/NotFound';
import Home from './Functional/Home';
import AboutMe from './Functional/AboutMe';
import Contact from './Functional/Contact';
import CV from './Functional/CV/CV';

// Assignments
import DadJoke from './Assignments/DadJoke/dadjoke';
import AssignmentHome from './Assignments/assignmentHome';
import Wordpress from './Assignments/Wordpress/Wordpress';
import Alfanet from './Assignments/AlfaNet/Alfanet';
import NBB from './Assignments/NBB/NBB';

// CSS
import ThemeContext from './CSS/ThemeContext';
import AP from './Assignments/AP/AP';
import Blog from './Functional/Blog';

const App = () => {
  const ArrAssignments:string[] = ["AP","Alfanet", "DadJoke", "NBB" ,"Wordpress"];
  const ArrAllPages:string[] = ["Home","Me","CV","Blog","Contact",...ArrAssignments.map(a => `Assignments/${a}`)];
  const [theme, setTheme] = useState("Dark");

  useEffect(() => {
    document.title = "Eli Winderickx";
  },[]);

  const router = createBrowserRouter([

    {
    path: "/",
    element: <Root ArrAllPages={ArrAllPages}/>,
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
          path:"CV",
          element: <CV />
        },
        {
          path: "Assignments",
          element: <Portfolio ArrAssignments={ArrAssignments}/>,
          children: [
            {
              path:"Home",
              element: <AssignmentHome ArrAssignments={ArrAssignments}/>
            },
            {
              path:"AP",
              element: <AP />
            },
            {
              path:"Alfanet",
              element: <Alfanet />
            },
            {
              path:"DadJoke",
              element: <DadJoke />
            },
            {
              path:"NBB",
              element: <NBB />
            },
            {
              path:"Wordpress",
              element: <Wordpress />
            },
            {
              path:"*",
              element: <NotFound />
            }
          ]
        },
        {
          path: "Blog",
          element: <Blog />
        },
        {
          path: "Contact",
          element: <Contact />
        },
        {
          path: "*",
          element: <NotFound />
        }
    ]
  }])


  return (
    <ThemeContext.Provider value={{theme:theme, setTheme: setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App;
