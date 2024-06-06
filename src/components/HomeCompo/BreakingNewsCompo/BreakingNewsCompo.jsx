import Marquee from 'react-fast-marquee';

const BreakingNewsCompo = () => {
  return (
    <div>
      <div className='flex items-center bg-slate-100 p-5'>
        <button className='btn w-40 btn-secondary btn-md rounded-none '>
          Latest
        </button>
        <span>
          <Marquee speed={100} pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </span>
      </div>
    </div>
  );
};

export default BreakingNewsCompo;
