import { useEffect, useState } from "react";
import Toycard from "./Toycard";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://rupsojja-toy-car-server.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setDisplayToys(data.slice(0, 20));
      });
  }, []);

  const handleClickShowMore = () => {
    setDisplayToys(toys);
    setShowAll(true);
  };

  const handleClickShowLess = () => {
    setDisplayToys(toys.slice(0, 20));
    setShowAll(false);
  };

  return (
    <div  data-aos="fade-up" data-aos-duration="1000">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-emerald-600">ToY CAR</h3>
        <h4 className="text-2xl">All TOY CAR Here</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayToys.map((toy) => (
          <Toycard key={toy._id} toy={toy} />
        ))}
      </div>
      {toys.length > 20 && !showAll && (
        <div className="text-center mt-4">
          <button className="btn btn-primary mb-5" onClick={handleClickShowMore}>
            Show More
          </button>
        </div>
      )}
      {showAll && (
        <div className="text-center mt-4">
          <button className="btn btn-primary mb-5" onClick={handleClickShowLess}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
