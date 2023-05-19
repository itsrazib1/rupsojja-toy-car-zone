import { Link } from "react-router-dom";

const Toycard = ({ toy }) => {
    const { _id,title , img , price } = toy;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>${price}</p>
          <div className="card-actions">
            <Link to={`/chekout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toycard;
