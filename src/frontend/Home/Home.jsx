import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [modalProduct, setModalProduct] = useState(null); 

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId)); 
    } else {
      setWishlist([...wishlist, productId]); 
    }
  };

  const openModal = (product) => {
    setModalProduct(product); 
  };

  const closeModal = () => {
    setModalProduct(null); 
  };

  return (
    <div>
      {/* Product List */}
      <div className="grid grid-cols-5 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-2 relative group overflow-hidden"
          >
            {/* Wishlist Icon */}
            <div className="absolute top-2 right-2">
              <FaHeart
                onClick={() => toggleWishlist(product.id)} 
                className={`text-xl cursor-pointer ${
                  wishlist.includes(product.id)
                    ? "text-red-500" 
                    : "text-gray-400"
                }`}
              />
            </div>

            {/* Product Image with Shadow */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl shadow"
            />

            {/* Product Details */}
            <div className="mt-4 text-left"> 
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-500 truncate">{product.description}</p>
              <div className="text-lg font-bold text-blue-600 mt-2">৳ {product.price}</div>
            </div>

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => addToCart(product.id)}
                className={`flex items-center justify-center w-3/4 mb-2 px-4 py-2 rounded ${
                  cart.includes(product.id)
                    ? "bg-green-500 text-white"
                    : "bg-transparent text-white  bg-opacity-60 hover:bg-green-500"
                }`}
              >
                <FaShoppingCart className="mr-2" />
                {cart.includes(product.id) ? "Added in Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => openModal(product)}
                className="flex items-center justify-center w-3/4 px-4 py-2 border rounded bg-transparent text-white backdrop-blur-lg bg-opacity-30 hover:bg-green-500"
              >
                <FaEye className="mr-2" />
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 relative max-w-lg w-full">
        
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            >
              ✕
            </button>

            {/* Product Image */}
            <img
              src={modalProduct.thumbnail}
              alt={modalProduct.title}
              className="w-full h-auto rounded"
            />
            <h2 className="text-lg font-semibold mt-4">{modalProduct.title}</h2>
            <p className="text-gray-500">{modalProduct.description}</p>
            <div className="text-lg font-bold text-blue-600 mt-2">
              ৳ {modalProduct.price}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
