import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from 'sweetalert2';


const Chekout = () => {
  const cars = useLoaderData();
  const { title,  url , price , _id } = cars;
  const {user} = useContext(AuthContext)

const handelorder = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const email = user?.email;
            const date = form.date.value;
            const address = form.address.value;

            const order = {
                customerName: name,
                service: title,
                price: price,
                cart_id: _id,
                phone,
                email,
                date,
                address,
                url
            }
            console.log(order);
            fetch('http://localhost:5000/cart',{
                method: 'POST',
                headers: {
                        'content-type': 'application/json'
                },
                body:JSON.stringify(order)
            })
            .then(res => res.json() )
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Added This Product On Cart',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                }
            })


}

  return (
    <div>
      <h2 className="text-center">MY CART:{title}</h2>

      <form onSubmit={handelorder} className="hero min-w-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-[50%]">
            <img className=" mx-auto" src={url} alt="" />
          </div>
          <div className=" md:w-[50%]  card flex-shrink-0  max-w-full shadow-2xl bg-base-100">
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
                  <input type="date" name="date" className="input input-bordered" />
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

export default Chekout;
