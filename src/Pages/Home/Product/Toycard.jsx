import { Link } from "react-router-dom";

const Toycard = ({ toy }) => {
  const { _id, name, url, Price } = toy;
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head*/}

            <tbody>
              {/* row 1 */}
              <tr className="flex ms-3 justify-between">
                <th>
                  <img
                    src={url}
                    alt="Shoes"
                    className="rounded-xl  w-[100px]"
                  />
                </th>
                <td className="w-[100px]">{name}</td>
                <td>{Price}</td>
                <td>
                  {" "}
                  <Link to={`/chekout/${_id}`}>
                    <button className="btn btn-primary">View Dtails</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img
    //         src={url}
    //         alt="Shoes"
    //         className="rounded-xl  h-[200px]"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{name}</h2>
    //       <p>{Price}৳</p>
    //       <div className="card-actions">
    //         <Link to={`/chekout/${_id}`}>
    //         <button className="btn btn-primary">View Dtails</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Toycard;
