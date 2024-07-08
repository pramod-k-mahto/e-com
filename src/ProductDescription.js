import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "./App";

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { productId, setProductItem } = useContext(data);

  // console.log("cartProductIdList", productId);

  const addToCartProductId = (id) => {
    if (!productId.includes(id)) {
      setProductItem([...productId, id]);
      // console.log("from if", productId);

    } else {
      // console.log("from Else", productId);
      return productId;
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 flex">
      {/* Product Details */}
      <div className="border-2 border-black max-w-md rounded overflow-hidden shadow-lg mb-4">
        <img
          className="w-44 h-44 m-auto"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-base">${product.price}</p>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Add to Cart Button */}
        <button
          onClick={() => {
            addToCartProductId(product.id);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-56 rounded mb-4"
        >
          Add to Cart
        </button>

        {/* Payment Button */}
        <button
          // onClick={proceedToPayment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-56 rounded"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
