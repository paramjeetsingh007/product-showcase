import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4"></div>
    </div>
  );

  return (
    <div className='p-4 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-10 shadow-lg bg-white dark:bg-gray-800 rounded-lg p-6'>
        
        <div className='flex-1 flex justify-center items-center'>
          <img
            src={product.image}
            alt={product.title}
            className='w-80 h-80 object-contain rounded-lg shadow-md bg-white dark:bg-gray-700 p-4'
          />
        </div>

        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{product.title}</h1>

          <p className='text-xl font-semibold text-green-600 dark:text-green-400'>₹ {product.price}</p>

          <span className='inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm w-max'>
            {product.category}
          </span>

          <p className='text-base leading-relaxed'>{product.description}</p>

          <div className='flex items-center gap-2 text-yellow-500 font-semibold'>
            ⭐ {product.rating.rate} 
            <span className='text-gray-600 dark:text-gray-300'>({product.rating.count} reviews)</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className='mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300'
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;
