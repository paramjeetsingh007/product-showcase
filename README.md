

# Product Showcase Application

This is a Product Showcase Web Application built with React.js. The application uses Fake Store API to display products. Users can view product listings, search, filter, sort, see product details, and manage cart items. The cart is saved in localStorage and the app supports dark/light mode.

## Features

* Animated landing page using Framer Motion
* Product listing page with search, filter, and sort options
* Product details page with description, price, category, and rating
* Add to cart and remove from cart functionality
* Persistent cart using localStorage
* Dark and light mode toggle
* Responsive UI built with Tailwind CSS
* Toast notifications using React Hot Toast

## Technologies Used

* React.js with Vite
* React Router DOM
* Tailwind CSS
* Axios for API requests
* React Hot Toast for notifications
* Framer Motion for animations
* Context API for global cart management

## Getting Started

### 1. Clone the repository

git clone [https://github.com/paramjeetsingh007/product-showcase.git](https://github.com/paramjeetsingh007/product-showcase.git)
cd product-showcase

### 2. Install dependencies

npm install

### 3. Start the application

npm run dev

The application will run at [http://localhost:5173](http://localhost:5173)

## API Used

The application fetches product data from Fake Store API:
[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

## Folder Structure

src
└── components
└── Navbar.jsx
└── ProductCard.jsx
└── context
└── CartContext.jsx
└── pages
└── Landing.jsx
└── Home.jsx
└── ProductDetail.jsx
└── Cart.jsx
└── App.jsx
└── main.jsx

## Live Demo

[You can deploy your project on Netlify or Vercel and add the live link here.](https://product-showcase-zeta.vercel.app/)

## Author

Paramjeet Singh
GitHub: [https://github.com/paramjeetsingh007](https://github.com/paramjeetsingh007)



