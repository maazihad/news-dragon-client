import { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarCompo from '../../components/SharedCompo/NavbarCompo/NavbarCompo';
import { AuthContext } from '../../providers/AuthProvider';

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    acceptedTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    createUser(email, password).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className='my-3'>
      <NavbarCompo></NavbarCompo>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
          <form onSubmit={handleRegister}>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2' htmlFor='photoUrl'>
                Photo URL
              </label>
              <input
                type='text'
                id='photoUrl'
                name='photoUrl'
                value={formData.photoUrl}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                required
              />
            </div>
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
            <div className='mb-4'>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='acceptedTerms'
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>I accept the terms and conditions</span>
              </label>
            </div>
            <button
              type='submit'
              className={`w-full py-2 px-4 rounded-md text-white ${
                formData.acceptedTerms
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!formData.acceptedTerms}
            >
              Register
            </button>
          </form>
          <p className='mt-4 text-center'>
            Already registered?{' '}
            <Link to='/login' className='text-blue-500 hover:underline'>
              Go to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
