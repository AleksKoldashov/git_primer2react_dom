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
import { Post } from './components/PostInput';
import { Posts } from './components/Posts';
import { PostPage } from './Pages/PostsPage';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        element: <Posts/>,
      },
      {
        path: "/posts/:id",
        element: <PostPage/>,
      }
    ]
  },
 
]);
const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // retry: false,
      // staleTime: 30000,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCache}> 
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
