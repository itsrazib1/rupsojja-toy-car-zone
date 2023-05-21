// import { useLoaderData } from "react-router-dom";


// const Chekout = () => {

// const cars = useLoaderData();
// console.log(cars);
//   return (
//     <div>
//       <h2>This is dtails {cars.name}</h2>
//       <h2>This is Price {cars.Price}</h2>
//       <img src={cars.url} alt="" />
//     </div>
//   );
// };

// export default Chekout;






import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const cars = useLoaderData();
  console.log(cars.length);
  const { name, url, Price, _id,Sellername,Subcategory,quantity,Rating ,description} = cars;

  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = user?.email;
    const date = form.date.value;
    const address = form.address.value;

    const order = {
      customerName: name,
      service: name,
      price: Price,
      cart_id: _id,
      phone,
      email,
      date,
      address,
      url,
    };

    console.log(order);

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added This Product On Cart",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      

      <form
        onSubmit={handleOrder}
        className="hero min-w-screen bg-base-200"
      >
        <div className="hero-content   lg:flex-row">
          <div className="md:w-[50%]">
          <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="text-gray-500">{Price} টাকা</span>
      </div>
      <div className="flex items-center mb-4">
        <img src={url} alt={name} className="h-[200px] rounded mr-4" />
        
      </div>
      <span>Seller Name : {Sellername} company</span>
      <div className="mb-4">
        <span className="text-gray-500">{Subcategory}</span>
        <span className="ml-2 text-gray-500">Quantity: {quantity}</span>
        <span className="ml-2 text-gray-500">Rating: {Rating}</span>
      </div>
      <p className="mb-4">{description}</p>
    </div>
          </div>
          <div className="md:w-[50%] card flex-shrink-0  max-w-full shadow-2xl bg-base-100">
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
                    defaultValue={user?.name}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Order date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Order"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
