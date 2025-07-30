import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const UpdateProduct = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    sku: '',
    image_url: '',
    description: '',
    quantity: '',
    price: '',
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  // Fetch product details on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/fetch-product/${productId}`);
        setFormData(res.data.product);
      } catch (err) {
        console.error(err);
        setMessage('Failed to load product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/product/update-product/${productId}`, formData);
      setMessage('Product updated successfully');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update product');
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Product</h2>

        {message && (
          <div className="mb-4 text-sm text-center text-blue-700 bg-blue-100 p-3 rounded">
            {message}
          </div>
        )}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          placeholder="SKU"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
          disabled // SKU should not be changed
        />
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
    </>
  );
};

export default UpdateProduct;
