
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      
      <img
        className="mx-auto h-[300px] "
        src="https://i.ibb.co/Vpb7bQ4/ops-meme-nba-1024x768.jpg"
        alt=""
      />
      <div>
        <img
          className="mx-auto mt-2 h-[250px]"
          src="https://i.ibb.co/7N4GhTD/404-not-found.png"
          alt=""
        />
      </div>
      <div className="mt-10 px-10 py-3 btn btn-outline">
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default Error;
