// React
import React, { Children, useEffect, useState } from 'react';
import {Router, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Functional componenten
import Base from './Functional/Base';
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
import Blog from './Assignments/Blog/Blog';
import NBB from './Assignments/NBB/NBB';

// CSS
import ThemeContext from './CSS/ThemeContext';
import AP from './Assignments/AP/AP';

const App = () => {
  const ArrAssignments:string[] = ["AP","Alfanet","Blog", "DadJoke", "NBB" ,"Wordpress"];
  //const ArrAllPages:string[] = ["Home","Me","CV","Contact","Secret",...ArrAssignments.map(a => `Assignments/${a}`)];
  const ArrAllPages:string[] = ["Base"];
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
          element: <Base />
        },
        {
          path:"Me",
          element: <Base />
        },
        {
          path:"CV",
          element: <Base />
        },
        {
          path:"Base",
          element: <Base />
        },
        {
          path: "Assignments",
          element: <Base />,
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
              path:"Blog",
              element: <Blog />
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
