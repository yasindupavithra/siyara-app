import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Components/Home/Home';
import MainProductList from '../Components/ProductList/MainProductList';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
import { MainLogin } from '../Components/Login/Mainlogin';
import { Register } from '../Components/Login/Register';
import Products from '../Components/Pages/Products';
import ProductCategory from '../Components/Pages/ProductCategory';
import About from '../Components/Pages/About';
import Contact from '../Components/Pages/Contact';
import Projects from '../Components/Pages/Projects';
import Success from '../Components/SucessPage/Success';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<MainProductList />} />
        <Route path="/productdetail/:id" element={<MainProductDetail />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default Routing;
