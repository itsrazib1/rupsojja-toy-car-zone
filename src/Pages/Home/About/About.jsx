import { Link } from "react-router-dom";
import img1 from "../../../../public/img/aboutpic.jpg"
const About = () => {
  return (
    <div>
      <div className="hero  min-h-screen bg-green-100 ">
        <div className="hero-content flex-col md:ms-32 lg:flex-row-reverse  ">
          <div className="md:w-1/2">
          <img
          
          src={img1}
          className="max-w-sm rounded-lg shadow-2xl w-[90%]"
        />
          </div>
          <div className=" md:w-1/2">
            <h1 className="text-5xl font-bold">Buy Awsome Toy Car!</h1>
            <p className="py-6">
            The toy car is a vibrant and compact miniature vehicle designed for endless fun. 
             With its sleek design, smooth wheels, and bright colors, it captures the essence 
              of speed and excitement. Made from durable materials, it is built to withstand  playful adventures, providing hours of imaginative play for children of all ages.
            </p>
            <div className="text-center">

            <Link to='alltoy' className="btn  bg-teal-400 ">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
