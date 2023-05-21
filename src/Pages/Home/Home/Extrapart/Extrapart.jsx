import { Link } from "react-router-dom";

const Extrapart = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Lx0Jthd/Large-Image-9947.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">Rupsojja ToY Car Zone</h1>
            <p className="mb-5">
            The toy car is a miniature replica of a sleek sports car. It features a vibrant red exterior with glossy finish, realistic detailing, and working wheels. The compact size makes it perfect for racing and maneuvering through imaginary tracks. Its sturdy construction ensures hours of fun for young car enthusiasts.
            </p>
            <Link to="/alltoy" className="btn btn-primary">Buy NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrapart;
