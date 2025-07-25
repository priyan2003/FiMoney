import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    sku: '',
    image_url: '',
    description: '',
    quantity: '',
    price: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/product/addproduct', formData);
      setMessage({ type: 'success', text: res.data.mess });
      setFormData({
        name: '',
        type: '',
        sku: '',
        image_url: '',
        description: '',
        quantity: '',
        price: '',
      });
    } catch (err) {
      const errMsg = err.response?.data?.mess || 'Product creation failed';
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>

        {message && (
          <div className={`mb-4 p-3 rounded text-sm ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {[
          { name: 'name', placeholder: 'Product Name' },
          { name: 'type', placeholder: 'Product Type' },
          { name: 'sku', placeholder: 'SKU (Unique ID)' },
          { name: 'image_url', placeholder: 'Image URL' },
          { name: 'description', placeholder: 'Description (optional)' },
          { name: 'quantity', placeholder: 'Quantity', type: 'number' },
          { name: 'price', placeholder: 'Price', type: 'number' }
        ].map(({ name, placeholder, type = 'text' }) => (
          <input
            key={name}
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            required={name !== 'description'}
          />
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
