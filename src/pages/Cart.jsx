import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.error('Removed from Cart');
  };

  if (cart.length === 0) return (
    <p className='p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen'>
      Your cart is empty.
    </p>
  );

  return (
    <div className='p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen'>
      <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
      <div className='flex flex-col gap-4'>
        {cart.map((item) => (
          <div key={item.id} className='flex justify-between items-center border p-4 bg-white dark:bg-gray-800 rounded'>
            <div className='flex gap-4 items-center'>
              <img src={item.image} className='h-20 w-20 object-contain' />
              <div>
                <h3 className='font-bold'>{item.title}</h3>
                <p>₹ {item.price}</p>
              </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className='bg-red-500 text-white p-2 rounded'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
