import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer/Footer";
import Navber from "../Pages/Shered/Navber/Navber";


const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;