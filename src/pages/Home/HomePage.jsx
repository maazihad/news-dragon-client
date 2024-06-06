import BreakingNewsCompo from '../../components/HomeCompo/BreakingNewsCompo/BreakingNewsCompo';
import DragonNewsHomeCompo from '../../components/HomeCompo/DragonNewsHomeCompo/DragonNewsHomeCompo';
import Title from '../../components/HomeCompo/HomeTitle/Title';
import LeftNavbar from '../../components/SharedCompo/NavbarCompo/LeftNavbar';
import NavbarCompo from '../../components/SharedCompo/NavbarCompo/NavbarCompo';
import RightNavbar from '../../components/SharedCompo/NavbarCompo/RightNavbar';

const HomePage = () => {
  return (
    <div>
      <Title></Title>
      <BreakingNewsCompo></BreakingNewsCompo>
      <NavbarCompo></NavbarCompo>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 m-2 h-screen'>
        <div className='col-auto   p-2'>
          <LeftNavbar></LeftNavbar>
        </div>
        <div className='md:col-span-2 '>
          <DragonNewsHomeCompo></DragonNewsHomeCompo>
        </div>
        <div className='col-auto '>
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
