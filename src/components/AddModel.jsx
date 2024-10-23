import React from "react";
import SideBar from "./SideBar";

function AddModel() {
  return (
    <>
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-md-shadow-md">
      <div className="text-2xl font-bold mb-6">
        <form className="space-y-6">
          {/* Add new Products menu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-lg font-medium mb-2">
                Brand Name
              </label>
              <input
                placeholder="Enter your brand name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-ring-indigo-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium mb-2">
                Model Name
              </label>
              <input
                placeholder="Enter your model name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-ring-indigo-500"
              />
            </div>
          </div>
          {/* Submit button */}
          <div>
            <button type="submit" className="w-full py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-blue-500 transition-all duration-150 focus:outline-none">Save</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default AddModel;
