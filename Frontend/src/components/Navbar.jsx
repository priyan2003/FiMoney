import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyStore</h1>
        <div className="flex gap-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
          <Link to="/addproduct" className="hover:underline">New Product</Link>
          <Link to="/updateproduct/123" className="hover:underline">Update Product</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
