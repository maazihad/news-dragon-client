import { FaEye } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
const DragonNewsCard = ({ singleNews }) => {
  const { id, author, title, image_url, details, rating, total_view } =
    singleNews;
  return (
    <div className='card card-compact w-full mb-4 rounded-none border border-purple-200'>
      <div className='flex items-center bg-purple-100 p-3 gap-2'>
        <div className='avatar'>
          <div className='w-10 rounded-full'>
            <img src={author?.img} alt='Author Image' />
          </div>
        </div>

        <div>
          <span className='text-md'>{author?.name}</span>
          <span className='text-sm'>{author?.published_date}</span>
        </div>
      </div>

      <h3 className='text-xl card-title my-3'>{title}</h3>
      <figure>
        <img src={image_url} alt='Image Banner' />
      </figure>

      <div className='text-md '>
        <p>
          {details.slice(0, 500)}{' '}
          <Link to={`/news-details/${id}`} className='btn-link'>
            see more...
          </Link>
        </p>
        <hr className='my-1' />
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

export default DragonNewsCard;
