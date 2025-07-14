// 📁 src/pages/Landing.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Product Showcase
      </motion.h1>

      <motion.button
        className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300"
        onClick={() => navigate('/home')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Explore Products
      </motion.button>

    </div>
  );
}

export default Landing;
