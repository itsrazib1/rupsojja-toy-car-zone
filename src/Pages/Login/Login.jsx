import { Link } from "react-router-dom";
import svg from "../../../public/img/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const Login = () => {
  const { singIn } = useContext(AuthContext);

  const hendlelogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email,password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error))
  };

  return (
    <div>
      <div className="hero min-h-screen bg-green-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img src={svg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center font-bold text-green-700">
                Log in Rupsojja ToY Car Zone
              </div>
              <form onSubmit={hendlelogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-accent"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p>
                New To Rupsojja ToY Car Zone?{" "}
                <Link className=" text-red-600 underline" to="/singup">
                  Sing Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
