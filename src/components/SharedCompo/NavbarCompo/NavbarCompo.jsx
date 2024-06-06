import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavbarCompo = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className='navbar bg-base-100 flex justify-between items-center'>
      <div className=''>
        <a className='btn btn-ghost text-xl'>Dragon News</a>
      </div>
      <div>
        <ul className='flex space-x-3'>
          <li className=''>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending
                  ? 'hover:bg-red-300'
                  : isActive
                  ? 'bg-green-200 p-2'
                  : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/Login'
              className={({ isActive, isPending }) =>
                isPending
                  ? 'hover:bg-red-300'
                  : isActive
                  ? 'bg-green-200 p-2'
                  : ''
              }
            >
              {' '}
              Login
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/register'
              className={({ isActive, isPending }) =>
                isPending
                  ? 'hover:bg-red-300'
                  : isActive
                  ? 'bg-green-200 p-2'
                  : ''
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='flex space-x-2'>
        <div>
          <FaUserCircle size={40} />
        </div>

        <div className='dropdown dropdown-end'>
          {user ? (
            <button
              onClick={() => logOut().then().catch()}
              className='btn btn-secondary w-32 btn-md rounded-none'
            >
              Sign Out
            </button>
          ) : (
            <Link
              to='/login'
              className='btn btn-secondary w-32 btn-md rounded-none'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarCompo;
