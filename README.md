
# Product Showcase Application

A modern and responsive Product Showcase Web Application built with React.js and Redux. The application displays products using the Fake Store API. Users can browse product listings, search, filter, sort, view product details, and manage cart items with persistence via localStorage. It also features dark/light theme support and beautiful UI with Tailwind CSS.

##  Features

- Animated landing page using Framer Motion
- 🛍Product listing page with search, filter, and sort options
- Product details page with description, price, category, and rating
- Add to cart and remove from cart functionality
- Persistent cart using localStorage and Redux
- Dark and Light mode toggle
- Responsive and clean UI with Tailwind CSS
- Toast notifications using React Hot Toast
- Fast development with Vite

##  Technologies Used

- React.js (Vite)
- React Router DOM (Routing)
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Axios (API Requests)
- React Hot Toast (Notifications)


## 📂 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/paramjeetsingh007/product-showcase.git
cd product-showcase
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## 📡 API Used

This project uses [Fake Store API](https://fakestoreapi.com/products) to fetch product data.

## 🗂️ Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Cart.jsx
│
├── redux/
│   ├── store.js
│   └── cartSlice.js
│
├── App.jsx
└── main.jsx
```

## 🔗 Live Demo

Live Demo: [https://product-showcase-zeta.vercel.app/](https://product-showcase-zeta.vercel.app/)

## 🙋‍♂️ Author

**Paramjeet Singh**

* GitHub: [https://github.com/paramjeetsingh007](https://github.com/paramjeetsingh007)



