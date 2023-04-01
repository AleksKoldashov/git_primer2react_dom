import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import { UsersItems } from './components/UsersItems';
import { Users } from './components/Users';
import { User } from './Pages/User';
import { Home } from './Pages/Home';
import { Post } from './Pages/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/user",
        element: <Users />,
        
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/posts",
        element: <Post/>,
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
