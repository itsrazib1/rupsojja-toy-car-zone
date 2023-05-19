import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Chekout from "../Pages/Chekout/Chekout";

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
            path:'chekout/:id',
            element:<Chekout/>,
            loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
        },
      ]
    },
  ]);


  export default router;