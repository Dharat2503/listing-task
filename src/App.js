

// App.js or any other parent component
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './pages/product/Product';
import ProductDetail from './pages/product/ProductDetail';
import { useSelector } from 'react-redux';

const App = () => {
  const products = useSelector(state => state.products);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product-detail/:productId" element={<ProductDetail products={products} />} />
    </Routes>
    </Router>
  );
};

export default App;
