export default function GRN() {
    return (
      <div className="bg-[#F8F8F8] p-6 min-h-screen">
        <div className="min-h-screen bg-gray-100 p-4">
          <section className="mb-4 grid-cols-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Supplier
            </label>
            <div className="flex items-center">
              <select
                id="supplier"
                className="flex-1 border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled selected>
                  Select a supplier
                </option>
                <option value="supplier1">Supplier 1</option>
                <option value="supplier2">Supplier 2</option>
                <option value="supplier3">Supplier 3</option>
              </select>
              <button className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2">
                Add Supplier
              </button>
            </div>
         
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Entry
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="product"
                placeholder="Scan or enter IMEI/model"
                className="flex-1 border border-gray-300 rounded-lg p-2"
              />
              <button className="ml-2 bg-green-500 text-white rounded-lg px-4 py-2">
                Scan
              </button>
            </div>
          </section>
  
          <section className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity & Price
            </label>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="Quantity"
                className="border border-gray-300 rounded-lg p-2 w-1/3 mr-2"
              />
              <input
                type="text"
                placeholder="Price"
                className="border border-gray-300 rounded-lg p-2 w-1/3"
              />
              <button className="ml-2 bg-yellow-500 text-white rounded-lg px-4 py-2">
                Add to GRN
              </button>
            </div>
          </section>
  
          <section className="mb-4">
            <h2 className="text-lg font-semibold mb-2">GRN List</h2>
            <ul
              id="grn-list"
              className="bg-white border border-gray-300 rounded-lg p-2 space-y-2"
            >
              <li className="flex justify-between">
                <span>Product Name (IMEI) - Qty: 1 - Price: $100</span>
                <span className="font-bold">$100</span>
              </li>
            </ul>
          </section>
  
          <section className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>Total Amount:</span>
              <span id="total-amount">$100</span>
            </div>
          </section>
  
          <div className="text-center">
            <button className="bg-blue-600 text-white rounded-lg px-6 py-2">
              Submit GRN
            </button>
          </div>
        </div>
      </div>
    );
  }
  