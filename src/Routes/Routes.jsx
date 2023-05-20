import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Chekout from "../Pages/Chekout/Chekout";
import MyCart from "../Pages/MyCart/MyCart";
import Privateroute from "./Privateroute";
import Addtoy from "../Pages/AddToy/Addtoy";
import Alltoy from "../Pages/Alltoy/Alltoy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/singup',
            element:<Singup/>
        },
        {
            path:'/addtoy',
            element:<Addtoy/>
        },
        {
            path:'/alltoy',
            element:<Alltoy/>
        },
        {
            path:'chekout/:id',
            element:<Chekout/>,
            loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
        },
        {
            path:'mycart',
            element:<Privateroute><MyCart/></Privateroute>,
            
        },
      ]
    },
  ]);


  export default router;