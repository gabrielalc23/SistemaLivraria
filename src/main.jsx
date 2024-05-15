import React from 'react'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Menu from './components/Menu.jsx';
import Livros from './pages/Livros.jsx';
import Filme from './pages/Filme.jsx';
import Home from './pages/Home.jsx';


=======
import Menu from   './components/Menu.jsx';
import Filme from  './pages/Filme.jsx';
import Livros from './pages/Livros.jsx';
import App from './pages/App.jsx';
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <>Penis</>,
=======
    element: <App/>,
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826
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
