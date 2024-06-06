import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
} from 'react-icons/fa';

import qZoneImg1 from '../../../assets/qZone1.png';
import qZoneImg2 from '../../../assets/qZone2.png';
import qZoneImg3 from '../../../assets/qZone3.png';

const RightNavbar = () => {
  return (
    <>
      <aside>
        <h4 className='font-bold text-lg'>Login With</h4>
        <button className='btn w-full my-1 rounded-none'>
          {' '}
          <FaGoogle /> Google SignIn
        </button>
        <button className='btn w-full my-1 rounded-none'>
          {' '}
          <FaGithub /> GitHub SignIn
        </button>
      </aside>

      <aside>
        <h4 className='font-bold text-lg mt-3'>Find us on</h4>
        <button className='btn w-full   border border-purple-300 rounded-t-lg rounded-none'>
          {' '}
          <FaFacebook /> Facebook
        </button>
        <button className='btn w-full  rounded-none   border-purple-300'>
          {' '}
          <FaTwitch /> Twitter
        </button>
        <button className='btn w-full  rounded-none border rounded-b-lg border-purple-300'>
          {' '}
          <FaInstagram /> Instagram
        </button>
      </aside>

      <aside>
        <h4 className='font-bold text-lg mt-3'>Find us on</h4>
        <div>
          <img src={qZoneImg1} alt='Q Zone Images' />
          <img src={qZoneImg2} alt='Q Zone Images' />
          <img src={qZoneImg3} alt='Q Zone Images' />
        </div>
      </aside>
    </>
  );
};

export default RightNavbar;
