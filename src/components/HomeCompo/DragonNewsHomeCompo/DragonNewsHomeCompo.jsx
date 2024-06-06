import { useEffect, useState } from 'react';
import DragonNewsCard from './DragonNewsCard';

const DragonNewsHomeCompo = () => {
  const [allNews, setAllNews] = useState([]);
  const [newsLength, setNewsLength] = useState(2);
  useEffect(() => {
    fetch('http://localhost:3000/news')
      .then((response) => response.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <>
      <div>
        {allNews.slice(0, newsLength).map((singleNews) => (
          <DragonNewsCard
            key={singleNews.id}
            singleNews={singleNews}
          ></DragonNewsCard>
        ))}
      </div>
      <div className={newsLength === allNews.length ? 'hidden' : 'text-center'}>
        <button
          onClick={() => setNewsLength(allNews.length)}
          className='btn btn-link text-md'
        >
          See More..
        </button>
      </div>
    </>
  );
};

export default DragonNewsHomeCompo;
