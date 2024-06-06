import { useLoaderData } from 'react-router-dom';
import Title from '../../components/HomeCompo/HomeTitle/Title';
import NavbarCompo from '../../components/SharedCompo/NavbarCompo/NavbarCompo';
import NewsDetailsCard from './NewsDetailsCard';
import RightNavbar from '../../components/SharedCompo/NavbarCompo/RightNavbar';

const NewsDetailsPage = () => {
  const news = useLoaderData();

  return (
    <div>
      <Title></Title>
      <NavbarCompo></NavbarCompo>

      <div className='grid grid-cols-4 gap-5'>
        <div className='col-span-3'>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </div>
        <div className='col-auto'>
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
