import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector(state => state.cart.cart);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
   <nav className='flex justify-between items-center p-4 shadow-md bg-transparent text-black dark:text-white'>

      <Link to='/home' className='text-xl font-bold'>Product Showcase</Link>
      <div className='flex gap-4 items-center'>
        <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} className='border px-3 py-1 rounded dark:border-white'>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <Link to='/cart'>Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
