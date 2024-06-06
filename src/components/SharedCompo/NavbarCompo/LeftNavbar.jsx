import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/category')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <h3 className='text-2xl text-center font-medium'>All Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              className={(isActive, isPending) =>
                isActive ? 'underline' : isPending ? 'no-underline' : ''
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeftNavbar;
