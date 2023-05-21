import { useContext } from 'react';
import img from '../../../public/img/images.png'
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';

const Addtoy = () => {

    const {user} = useContext(AuthContext)

const hendelAddToy = event => {
    event.preventDefault();

const form = event.target;

const name = form.name.value;
const url = form.url.value;
const Sellername = form.Sellername.value;
const Selleremail = user.email;
const Subcategory = form.Subcategory.value;
const Price = form.Price.value;
const quantity = form.quantity.value;
const Rating = form.Rating.value;
const description = form.description.value;

const newCoffee = {name,url,Sellername,Selleremail,Subcategory,Price,quantity,Rating,description};
console.log(newCoffee);

//send data


fetch('http://localhost:5000/toys', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(newCoffee),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Show the SweetAlert2 toast notification
    Swal.fire({
      icon: 'success',
      title: 'Product Added',
      showConfirmButton: false,
      timer: 1500,
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });


} 


    
    return (
        <div><div>
        <h2 className=" text-center ">ADD NEW TOY</h2>
  
        <form onSubmit={hendelAddToy} className="hero  min-w-screen bg-base-200">
          <div className="hero-content flex-col w-full lg:flex-row">
            <div className=" w-[40%]">
              <img className=" mx-auto" src={img} alt="" />
            </div>
            <div className=" md:w-[60%]  card flex-shrink-0  max-w-full shadow-2xl bg-base-100">
              <div className="card-body w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Picture URL of the toy</span>
                    </label>
                    <input
                      type="text"
                      name="url"
                      placeholder="Picture URL of the toy"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller name</span>
                    </label>
                    <input
                      type="text"
                      name="Sellername"
                      placeholder="name"
                      
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                      type="text"
                      name="Selleremail"
                      placeholder="phone"
                      defaultValue={user?.email}
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Sub-category</span>
                    </label>
                    <input
                      type="text"
                      name="Subcategory"
                      placeholder="Sub-category"
                      className="input input-bordered"
                      
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder='Price' name="Price" className="input input-bordered" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available quantity</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Available quantity"
                      className="input input-bordered"
                      
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder='Rating' name="Rating" className="input input-bordered" />
                  </div>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Detail description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Detail description"
                
                    className="input input-bordered text-center  "
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-secondary btn-block"
                    type="submit"
                    value="Add Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
        </div>
    );
};

export default Addtoy;