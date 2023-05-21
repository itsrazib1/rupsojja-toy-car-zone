import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";

const Updatetoy = () => {
  const cars = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    url,
    Sellername,
    Subcategory,
    Price,
    quantity,
    Rating,
    description,
  } = cars;
  const hendelupdateToy = (event) => {
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

    const updatedcar = {
      name,
      url,
      Sellername,
      Selleremail,
      Subcategory,
      Price,
      quantity,
      Rating,
      description,
    };
    console.log(updatedcar);

    //send data

    fetch(`http://localhost:5000/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedcar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Show the SweetAlert2 toast notification
        if(data.modifiedCount > 0){
            Swal.fire({
                icon: "success",
                title: "Car Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
        }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div>
        <div>
          <h2 className=" text-center ">UPDATE YOUR TOY</h2>

          <form
            onSubmit={hendelupdateToy}
            className="hero  min-w-screen bg-base-200"
          >
            <div className="hero-content flex-col w-full lg:flex-row">
              <div className=" w-[40%]">
                <img
                  className=" mx-auto"
                  src="https://i.ibb.co/887X0kL/Update.jpg"
                  alt=""
                />
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
                        defaultValue={name}
                        placeholder="name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Picture URL of the toy
                        </span>
                      </label>
                      <input
                        type="text"
                        name="url"
                        defaultValue={url}
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
                        defaultValue={Sellername}
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
                        defaultValue={Subcategory}
                        placeholder="Sub-category"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Price"
                        defaultValue={Price}
                        name="Price"
                        className="input input-bordered"
                      />
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
                        defaultValue={quantity}
                        placeholder="Available quantity"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Rating"
                        defaultValue={Rating}
                        name="Rating"
                        className="input input-bordered"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text ">Detail description</span>
                    </label>
                    <textarea
                      rows={4}
                      name="description"
                      defaultValue={description}
                      placeholder="Detail description"
                      className="input input-bordered text-center "
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-secondary btn-block"
                      type="submit"
                      value="Update Product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatetoy;
