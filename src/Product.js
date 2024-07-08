import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [productList, setProduct] = useState([]);
  
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    // console.log(response.products);
    setProduct(response.products);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg w-52 p-4 text-center"
          >
            <NavLink to={`/productDescription/${product.id}`}>
              <div className="border border-gray-200 p-2 mb-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-32 h-32 mx-auto mb-4"
                />
              </div>
              <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
