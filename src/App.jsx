import React, { useState } from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Element/Home';
import Edite from './Element/Edite';
import Add from './Element/Add';
import Read from './Element/Read';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/add",
    element: <Add></Add>
  },
  {
    path: "/edite",
    element: <Edite></Edite>
  },
  {
    path: "/read",
    element: <Read></Read>
  },
 

]);


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App