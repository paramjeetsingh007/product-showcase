import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sort, setSort] = useState('');

  useEffect(() => {
  
    const timer = setTimeout(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          setProducts(res.data);
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === 'All' || p.category === filterCategory)
  );

  if (sort === 'low-high') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'high-low') filtered.sort((a, b) => b.price - a.price);

  return (
    <div className='p-4 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white'>
      <div className='flex flex-col md:flex-row gap-4 mb-4'>
        <input
          type='text'
          placeholder='Search...'
          className='border p-2 w-full md:w-1/3 dark:bg-gray-700 dark:text-white'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={loading}
        />
        <select
          className='border p-2 dark:bg-gray-700 dark:text-white'
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          disabled={loading}
        >
          {categories.map((cat, idx) => (
            <option key={idx}>{cat}</option>
          ))}
        </select>
        <select
          className='border p-2 dark:bg-gray-700 dark:text-white'
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          disabled={loading}
        >
          <option value=''>Sort</option>
          <option value='low-high'>Price: Low to High</option>
          <option value='high-low'>Price: High to Low</option>
        </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {loading ? (
          [...Array(8)].map((_, idx) => (
            <div key={idx} className='p-4 border rounded-xl shadow-2xl'>
              <Skeleton height={150} />
              <Skeleton height={20} className='mt-2' />
              <Skeleton height={20} width={100} />
              <Skeleton height={30} className='mt-3' />
            </div>
          ))
        ) : (
          filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
