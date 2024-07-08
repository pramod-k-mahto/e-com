import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Store</h1>
        <p className="mt-4 text-lg">
          Discover the best products at unbeatable prices
        </p>


        <button
          onClick={() => {
            Navigate("/product");
          }}
          className="mt-4 bg-black text-yellow-500 font-bold py-2 px-4 rounded"
        >
          Shop Now
        </button>








      </div>

      {/* Featured Products Section */}
      <div className="mt-10 px-4">
        <h2 className="text-2xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Product 1</h3>
            <p className="mt-2 text-gray-700">$29.99</p>
            <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Product 2</h3>
            <p className="mt-2 text-gray-700">$39.99</p>
            <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Product 3</h3>
            <p className="mt-2 text-gray-700">$49.99</p>
            <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Product 4</h3>
            <p className="mt-2 text-gray-700">$59.99</p>
            <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-yellow-500 text-black p-6 mt-10 text-center">
        <h2 className="text-2xl font-bold">Limited Time Offer!</h2>
        <p className="mt-2 text-lg">
          Get 20% off on all items. Use code: SUMMER20 at checkout.
        </p>
        <button className="mt-4 bg-black text-yellow-500 font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
