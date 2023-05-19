import About from "../About/About";
import Product from "../Product/Product";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Product/>
        </div>
    );
};

export default Home;