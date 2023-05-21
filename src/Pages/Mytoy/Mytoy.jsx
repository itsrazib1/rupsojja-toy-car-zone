import { useLoaderData } from "react-router-dom";
import Mytoycard from "./Mytoycard";
import { useEffect } from "react";


const Mytoy = () => {
  const cars = useLoaderData();
  useEffect(()=>{
    document.title = "RTCZ | Mytoy"
},[])
  return (
    <div>
      
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
      {
        cars.map(car => <Mytoycard
        key={car._id}
        car={car}
        ></Mytoycard> )
      }
      </div>
     
    </div>
  );
};

export default Mytoy;
