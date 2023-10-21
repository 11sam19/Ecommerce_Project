import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import Category from './components/Category';
import Brand from './components/Brand';
import ProductItem from './components/ProductItem';
import Orders from './components/Orders';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="home" element={<Home />}/>
            <Route path="category" element={<Category />}/>
            <Route path="brand" element={<Brand />}/>
            <Route path="items" element={<ProductItem />}/>
            <Route path="orders" element={<Orders />}/>
          </Route>
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;