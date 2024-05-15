import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu.jsx';
import Livros from './pages/Livros.jsx';
import Filme from './pages/Filme.jsx';
import Home from './pages/Home.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <>Penis</>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Livros",
    element: <Livros />
  },
  {
    path: "/Filmes",
    element: <Filme />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
