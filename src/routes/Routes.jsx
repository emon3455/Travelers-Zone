import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import Destinations from "../Pages/Destinations/Destinations";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/booking/:id",
            element: <PrivateRoute> <Booking></Booking> </PrivateRoute>,
            loader: ({params})=> fetch(`https://travel-server-side-emon3455.vercel.app/destinations/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/destinations",
            element: <Destinations></Destinations>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        }
      ]
    }
   
]);


export default router;