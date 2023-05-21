import About from "../About/About";
import Product from "../Product/Product";
import Banner from "./Banner/Banner";
import Extrapart from "./Extrapart/Extrapart";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Product/>
            <Extrapart/>
        </div>
    );
};

export default Home;