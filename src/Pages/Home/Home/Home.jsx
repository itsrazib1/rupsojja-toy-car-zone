import About from "../About/About";
import Product from "../Product/Product";
import Banner from "./Banner/Banner";
import Carosole from "./Carosole/Carosole";
import Extrapart from "./Extrapart/Extrapart";


const Home = () => {
    return (
        <div className=" ">
            <Banner/>
            <About/>
            <Product/>
            <Extrapart/>
            
        </div>
    );
};

export default Home;