import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAdd = () => {
    const alreadyAdded = cart.find((item) => item.id === product.id);

    dispatch(addToCart(product));

    if (!alreadyAdded) {
      toast.success("Added to Cart!");
    }
    
  };

  return (
    <div className="border border-white/40 dark:border-neutral-800/40 p-4 flex flex-col rounded-2xl shadow-xl backdrop-blur-lg bg-[#EDDEA4] dark:bg-gray-800/30 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-2 rounded-lg"
        />
        <h2 className="font-bold mb-1">{product.title.substring(0, 30)}...</h2>
      </Link>
      <p className="mb-1 text-lg font-semibold text-green-600 dark:text-green-400">
        ₹ {product.price}
      </p>
      <p className="mb-2 text-sm italic">{product.category}</p>
      <button
        onClick={handleAdd}
        className="p-2 rounded-xl font-bold transition 
          bg-[#e99365] hover:bg-[#d87e4e] 
          dark:bg-[#3d405b] dark:hover:bg-[#2b2e43] 
          text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
