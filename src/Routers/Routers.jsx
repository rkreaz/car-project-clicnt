import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
             path: '/',
             element: <Home></Home>
        },
        {
             path: '/login',
             element: <Login></Login>
        },
        {
             path: '/register',
             element: <Register></Register>
        },
       
      ]
    },
  ]);

  export default router