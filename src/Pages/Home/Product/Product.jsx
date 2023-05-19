import { useEffect, useState } from "react";
import Toycard from "./Toycard";

const Product = () => {
  const [toys, settoy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => settoy(data));
  }, []);
  return (
    <div>
      <div className=" text-center">
        <h3 className=" text-4xl font-bold text-emerald-600">ToY CAR</h3>
        <h4 className="text-2xl">All TOY CAR Here</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
        toys.map(toy => <Toycard
        key={toy._id}
        toy={toy}
        ></Toycard>)
        }
       
      </div>
    </div>
  );
};

export default Product;
