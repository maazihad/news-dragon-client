import moment from 'moment';
import titleName from '../../../assets/logo.png';

const Title = () => {
  return (
    <div className='flex flex-col items-center my-5'>
      <div>
        <img src={titleName} alt='Title Name' />
      </div>
      <h5>Journalism Without Fear or Favour</h5>
      <p>{moment().format('dddd, LL')}</p>
    </div>
  );
};

export default Title;
