import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='font-roboto'>
      <div className='max-w-6xl mx-auto '>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
