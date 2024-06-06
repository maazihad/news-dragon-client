const Spinner = () => {
  return (
    <div className='text-7xl text-red-500 font-medium flex justify-center items-center h-screen'>
      <span>L</span>
      <div className='animate-spin border-dashed border-8 rounded-full border-red-500 size-14'></div>
      <span>ading</span>
    </div>
  );
};

export default Spinner;
