import ReactStars from 'react-rating-stars-component';
import { FaEye } from 'react-icons/fa';
const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view } = news;
  return (
    <div className=' w-full mb-4  border border-purple-200'>
      <img className='w-full object-cover' src={image_url} alt='Image Banner' />

      <div className='text-md '>
        <h3 className='text-xl card-title my-3'>{title}</h3>
        <p>{details} </p>

        <div className='card-actions justify-between items-center'>
          <ReactStars
            count={5}
            value={rating?.number}
            size={24}
            activeColor='#ffd700'
            edit={false}
          />
          <p className='flex items-center gap-2'>
            <FaEye /> {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
