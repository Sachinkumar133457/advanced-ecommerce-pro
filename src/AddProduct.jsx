import React, { useState } from 'react';

export default function AddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Naya product parent component ya database/state mein bhejne ke liye
    onAddProduct(product);
    alert('Product successfully added!');
    // Form reset karne ke liye
    setProduct({ name: '', price: '', category: '', image: '', description: '' });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Product Name</label>
          <input 
            type="text" 
            value={product.name} 
            onChange={(e) => setProduct({...product, name: e.target.value})}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Price</label>
          <input 
            type="number" 
            value={product.price} 
            onChange={(e) => setProduct({...product, price: e.target.value})}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <input 
            type="text" 
            value={product.category} 
            onChange={(e) => setProduct({...product, category: e.target.value})}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Image URL</label>
          <input 
            type="text" 
            value={product.image} 
            onChange={(e) => setProduct({...product, image: e.target.value})}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea 
            value={product.description} 
            onChange={(e) => setProduct({...product, description: e.target.value})}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700" 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold">
          Add Product
        </button>
      </form>
    </div>
  );
}