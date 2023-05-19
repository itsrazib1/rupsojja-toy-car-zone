import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";

const Chekout = () => {
  const cars = useLoaderData();
  const { title,  img } = cars;
  const {user} = useContext(AuthContext)

const handelorder = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const email = user?.email;
            const date = form.date.value;
            const address = form.address.value;
            console.log(order);

            const order = {
                name,
                phone,
                email,
                date,
                address
            }



}

  return (
    <div>
      <h2>MY CART:{title}</h2>

      <form onSubmit={handelorder} className="hero min-w-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-[50%]">
            <img className=" mx-auto" src={img} alt="" />
          </div>
          <div className=" w-[50%] card flex-shrink-0  max-w-full shadow-2xl bg-base-100">
            <div className="card-body">
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
