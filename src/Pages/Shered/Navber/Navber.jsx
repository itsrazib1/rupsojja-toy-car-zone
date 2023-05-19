import { Link } from 'react-router-dom';
import logo from '../../../../public/img/img-1.jpg'

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='alltoy'>All Toys</Link>
            </li>
            <li>
              <Link to='mytoy'>My Toys</Link>
            </li>
            
            <li>
              <Link to='addtoy'>Add A Toy</Link>
            </li>
            <li>
              <Link to='blogs'>Blogs</Link>
            </li>
            </ul>
          </div>
          <Link to='/' className="  text-xl">
            <img className=' w-36 rounded-lg' src={logo} alt="" />
          </Link>
          <div className=' lg:text-xl font-bold ms-5  text-xs  '>Rupsojja ToY Car Zone</div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='alltoy'>All Toys</Link>
            </li>
            <li>
              <Link to='mytoy'>My Toys</Link>
            </li>
            
            <li>
              <Link to='addtoy'>Add A Toy</Link>
            </li>
            <li>
              <Link to='blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
        
        <div className="navbar-end">
        <div className='me-10'>Surch</div>
          <Link to='login' className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
