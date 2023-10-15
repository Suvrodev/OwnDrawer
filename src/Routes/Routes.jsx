import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Feedback from "../Pages/Feedback/Feedback";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Navigate to={'/home'}></Navigate>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/feedback',
            element: <Feedback></Feedback>
        },
      ]
    },
  ]);

  export default router;
  