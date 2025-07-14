import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

function Navbar() {
  const { cart } = useCart();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className='flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900 text-black dark:text-white'>
      <Link to='/' className='text-xl font-bold'>Product Showcase</Link>
      <div className='flex gap-4 items-center'>
        <button onClick={toggleTheme} className='border px-3 py-1 rounded dark:border-white'>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <Link to='/cart'>Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
