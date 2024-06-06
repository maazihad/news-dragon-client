import { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavbarCompo from '../../components/SharedCompo/NavbarCompo/NavbarCompo';
import { AuthContext } from '../../providers/AuthProvider';

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  console.log('Location in login page ', location);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    signIn(email, password)
      .then((result) => {
        // navigate(location?.state ? location.state : '/');
        navigate(from, { replace: true });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='my-3'>
      <NavbarCompo></NavbarCompo>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                required
              />
            </div>
            <div className='mb-4 relative'>
              <label className='block text-gray-700 mb-2' htmlFor='password'>
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                required
              />
              <div className='absolute inset-y-0 top-8 right-0 pr-3 flex items-center text-sm leading-5'>
                {showPassword ? (
                  <AiFillEyeInvisible
                    onClick={togglePasswordVisibility}
                    className='cursor-pointer text-3xl'
                  />
                ) : (
                  <AiFillEye
                    onClick={togglePasswordVisibility}
                    className='cursor-pointer text-3xl'
                  />
                )}
              </div>
            </div>
            <button
              type='submit'
              className='w-full py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-700'
            >
              Login
            </button>
          </form>
          <p className='mt-4 text-center'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-blue-500 hover:underline'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
