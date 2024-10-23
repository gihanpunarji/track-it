import React from "react";

function ViewInventory() {
  const inventoryData = [
    { id: 1, name: "iPhone 13", brand: "Apple", model: "iPhone 13" },
    { id: 2, name: "Galaxy S21", brand: "Samsung", model: "Galaxy S21" },
    { id: 3, name: "Mi 11", brand: "Xiaomi", model: "Mi 11" },
    // Add more data as needed
  ];

  return (
   
   <div className="max-w-6xl mx-auto p-8 bg white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Inventory</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full mx-auto border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bordeer">ID</th>
              <th className="px-4 py-2 bordeer">Name</th>
              <th className="px-4 py-2 bordeer">Brand</th>
              <th className="px-4 py-2 bordeer">Model</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 bordeer">{item.id}</td>
                <td className="px-4 py-2 bordeer">{item.name}</td>
                <td className="px-4 py-2 bordeer">{item.brand}</td>
                <td className="px-4 py-2 bordeer">{item.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewInventory;
