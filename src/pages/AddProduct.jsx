import React, { useState } from "react";

function AddProduct() {
  const [imei, setImei] = useState("");

  const handleScanBarcode = () => {
    // Simulate scanning barcode and setting the IMEI number
    setImei("123456789012345"); // Replace this with the actual scanned value
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Mobile Phone</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Selection */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Brand</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a brand</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="huawei">Huawei</option>
            <option value="xiaomi">Xiaomi</option>
          </select>
        </div>

        {/* Model Selection */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Model</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a model</option>
            <option value="iphone-13">iPhone 13</option>
            <option value="galaxy-s21">Galaxy S21</option>
            <option value="mate-40">Huawei Mate 40</option>
            <option value="mi-11">Xiaomi Mi 11</option>
          </select>
        </div>

        {/* Mobile Name */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Mobile Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter mobile name"
          />
        </div>

        {/* IMEI Number */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">IMEI Number</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Scan or enter IMEI number"
            />
            <button
              type="button"
              onClick={handleScanBarcode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Scan Barcode
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Price ($)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter price"
          />
        </div>

        {/* Stock */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Stock</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Size */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Size (GB)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter size (e.g., 64GB)"
          />
        </div>

        {/* Condition */}
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Condition</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
