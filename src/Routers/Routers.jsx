import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckOut from "../components/CheckOut/CheckOut";
import Booking from "../components/Booking/Booking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        {
             path: '/checkout/:id',
             element: <CheckOut></CheckOut>,
             loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
        },
        {
             path: '/booking',
             element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        },
       
      ]
    },
  ]);

  export default router