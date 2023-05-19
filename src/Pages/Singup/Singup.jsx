import { Link } from "react-router-dom";
import svg from '../../../public/img/online-sign-up-4489361-3723268.webp'
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const Singup = () => {

const {createUser} = useContext(AuthContext)

    const hendlelogin = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
        
    }

    return (
        <div>
            

            <div className="hero min-h-screen bg-green-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2">
      <img src={svg} alt="" />
      </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className='text-center font-bold text-green-700'>Sing UP Rupsojja ToY Car Zone</div>
        <form onSubmit={hendlelogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-accent" type="submit" value="Login" />
        </div>
        </form>
        <p>Alrady Have An Accoutn? <Link className=' text-red-600 underline' to='/login'>Login</Link></p>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default Singup;