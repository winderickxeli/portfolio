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
import CV from './Functional/CV';
import SpaceX from './Functional/Extras/SpaceX';

// Assignments
import AssignmentHome from './Assignments/assignmentHome';
import ColorSelect from './Assignments/color-select';
import ShoppingList from './Assignments/shoppinglist';
import DadJoke from './Assignments/DadJoke/dadjoke';
import ToDo from './Assignments/Todo/todo';
import QuizApp from './Assignments/Quiz/QuizApp';
import SlotMachine from './Assignments/Slotmachine/slotmachine';
import CounterList from './Assignments/counterlist';
import Counter from './Assignments/Counter';
import { Pokedex,Pokemon } from './Assignments/PokeLibrary/Pokedex';

// CSS
import ThemeContext from './CSS/ThemeContext';

const App = () => {
  const ArrAssignments:string[] = ["Color Select","Shoppinglist","Dad Joke","ToDo","QuizApp","SlotMachine","Counter List", "Counter", "Pokedex"];
  const ArrAllPages:string[] = ["Home","Me","CV","Contact","Secret",...ArrAssignments.map(a => `Assignments/${a}`)];
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
          path:"Secret",
          element: <SpaceX/>
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
              path:"Color Select",
              element: <ColorSelect />
            },
            {
              path:"Shoppinglist",
              element: <ShoppingList />
            },
            {
              path:"Dad Joke",
              element: <DadJoke />
            },
            {
              path:"ToDo",
              element: <ToDo />
            },
            {
              path:"QuizApp",
              element: <QuizApp />
            },
            {
              path:"SlotMachine",
              element: <SlotMachine slots={5} />
            },
            {
              path:"Counter List",
              element: <CounterList />
            },
            {
              path:"Counter",
              element: <Counter />
            },
            {
              path:"Pokedex",
              element: <Pokedex />,
            },
            {
              path:"Pokemon/:id",
              element: <Pokemon/>
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
