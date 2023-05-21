import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mytoycard = ({ car }) => {
  const {
    _id,
    name,
    url,
    Sellername,
    Selleremail,
    Subcategory,
    Price,
    quantity,
    Rating,
    description,
  } = car;
  const { user } = useContext(AuthContext);



  const hendeldelite = _id =>{
console.log(_id);
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`https://rupsojja-toy-car-server.vercel.app/cars/${_id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }
      })
    }
  })
  } 

  if (user.email === Selleremail) {
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl border-4 m-4 h-[400px]">
          <figure className="w-[25%]">
            <img className="w-[200px]" src={url} alt="Movie" />
          </figure>
          <div className="card-body flex w-[25%]">
            <div>
            <h2 className="card-title">Car Name Is : {name}</h2>
            <p>Seller Name Is :{Sellername}</p>
            <p>Subcategory is :{Subcategory}</p>
            <p>Price is: {Price}</p>
            <p>quantity is : {quantity}</p>
            <p>Rating Is :{Rating}</p>
            </div>
            <p className=" text-xs">{description}</p>
            <div className="card-actions  justify-end">
              <div className="">
                <Link className="btn btn-primary mr-5 rounded-lg btn-active">View</Link>
                <Link to={`/updatetoy/${_id}`} className="btn btn-accent mr-5">Edit</Link>
                <Link onClick={ () => hendeldelite(_id)} className="btn bg-red-600 mr-20 ">Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Render nothing if the user's email and seller's email don't match
};

export default Mytoycard;
