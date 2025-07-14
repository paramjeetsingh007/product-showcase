import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success('Added to Cart!');
  };

  return (
    <div className='border p-4 flex flex-col rounded-xl shadow-2xl'>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className='h-48 w-full object-contain mb-2'/>
        <h2 className='font-bold mb-1'>{product.title.substring(0, 30)}...</h2>
      </Link>
      <p className='mb-1'>₹ {product.price}</p>
      <p className='mb-2 text-sm italic'>{product.category}</p>
      <button onClick={handleAdd} className='bg-[#3d405b] text-white p-2 rounded'>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
