import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import NavBar from "./NavBar";
import Home from "./Home";
import ProductDescription from "./ProductDescription";
import CartItem from "./CartItem";
import Login from "./Login";
import "./App.css";
import SignUp from "./SingUp"
const data = createContext();

function App() {
  const [item, setItem] = useState(0);
  const [productId, setProductItem] = useState([]);

  return (
    <div className="App">
      <data.Provider value={{ item, setItem, productId, setProductItem }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/productDescription/:id" element={<ProductDescription />} />
        </Routes>
      </data.Provider>
    </div>
  );
}

export default App;
export { data };
