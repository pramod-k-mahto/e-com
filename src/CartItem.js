import React, { useContext, useEffect, useState } from "react";
import { data } from "./App";

function CartItem() {
  const { productId } = useContext(data);
  const [cartProducts, setCartProducts] = useState([]);

  // console.log("cartProductsId", productId);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const products = await response.json();

        // Filter products based on productId
        const filteredProducts = products.products.filter((item) =>
          productId.includes(item.id)
        );

        setCartProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, [productId]);

  if (cartProducts.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id} className="mb-4 border-b pb-4">
            <img src={product.thumbnail} alt={product.title} className="w-16 h-16 mr-4" />
            <span className="font-bold">{product.title}</span> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItem;
