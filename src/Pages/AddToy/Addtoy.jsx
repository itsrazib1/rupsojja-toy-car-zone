import img from '../../../public/img/images.png'

const Addtoy = () => {
    return (
        <div><div>
        <h2 className=" text-center ">MY CART</h2>
  
        <form className="hero  min-w-screen bg-base-200">
          <div className="hero-content flex-col w-full lg:flex-row">
            <div className=" w-[30%]">
              <img className=" mx-auto" src={img} alt="" />
            </div>
            <div className=" md:w-[70%]  card flex-shrink-0  max-w-full shadow-2xl bg-base-100">
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
                      name="name"
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
                      name="phone"
                      placeholder="phone"
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
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="date" className="input input-bordered" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available quantity</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="date" className="input input-bordered" />
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
                    className="input input-bordered text-center  pb-16 pt-16"
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