import React, { Children, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Functional componenten
import Root from './Functional/Root';
import Portfolio from './Functional/Portfolio';
import NotFound from './Functional/NotFound';
import Home from './Functional/Home';
import AboutMe from './Functional/AboutMe';
import Contact from './Functional/Contact';
import CV from './Functional/CV';

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

const App = () => {

  const ArrAssignments:string[] = ["Color Select","Shoppinglist","Dad Joke","ToDo","QuizApp","SlotMachine","Counter List", "Counter", "Pokedex"];
  const ArrExtraAssignments: string[] = [];
  const CombinedAssignments: string[] = [...ArrAssignments,...ArrExtraAssignments];

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
          path:"CV",
          element: <CV />
        },
        {
          path: "Assignments",
          element: <Portfolio ArrAssignments={ArrAssignments}/>,
          children: [
            {
              path:"Home",
              element: <AssignmentHome />
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
              element: <SlotMachine />
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
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
