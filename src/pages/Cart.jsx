import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error('Removed 1 item from cart');
  };

  if (cart.length === 0) {
    return (
      <div className='p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen'>
        <h2 className='text-2xl font-bold'>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className='p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen'>
      <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
      <div className='flex flex-col gap-4'>
        {cart.map(item => (
          <div key={item.id} className='flex justify-between items-center border p-4 bg-white dark:bg-gray-800 rounded'>
            <div className='flex items-center gap-4'>
              <img src={item.image} alt={item.title} className='h-20 w-20 object-contain' />
              <div>
                <h3 className='font-bold'>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹ {item.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className='bg-red-500 text-white p-2 rounded'
            >
              Remove 1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
