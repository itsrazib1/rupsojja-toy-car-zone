import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";

import MyCart from "../Pages/MyCart/MyCart";
import Privateroute from "./Privateroute";
import Addtoy from "../Pages/AddToy/Addtoy";
import Alltoy from "../Pages/Alltoy/Alltoy";
import Error from "../Pages/Error/Error";
import Checkout from "../Pages/Chekout/Chekout";
import Bloge from "../Pages/Bloge/Bloge";
import Mytoy from "../Pages/Mytoy/Mytoy";
import Updatetoy from "../Pages/Update toy/Updatetoy";

const router = createBrowserRouter([
  

  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <Singup />,
      },
      {
        path: "/addtoy",
        element: <Addtoy />,
      },
      {
        path: "/updatetoy",
        element: <Updatetoy/>,
        loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/alltoy",
        element: <Alltoy />,
      },
      {
        path: "/mytoy",
        element: <Mytoy/>,
        loader: () => fetch(`http://localhost:5000/cars`)
      },
      {
        path: "/blogs",
        element: <Bloge/>,
      },
      {
        path: "chekout/:id",
        element: <Checkout />,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "mycart",
        element: (
          <Privateroute>
            <MyCart />
          </Privateroute>
        ),
      },
    ],
  },
]);

export default router;
