import React from 'react'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from   './components/Menu.jsx';
import Filme from  './pages/Filme.jsx';
import Livros from './pages/Livros.jsx';
import App from './pages/App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <>Hello</>,
  },
  {
    path: "/Livros",
    element: <Livros />,
  },
  {
    path: "/Filmes",
    element: <Filme />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
