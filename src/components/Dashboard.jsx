import {
  faMoneyBillWave,
  faPiggyBank,
  faUndo,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfitLossChart from "./ProfitLossChart";
import PieChart from "./PieChart";
import StockAnalysisChart from "./StockAnalisysChart";

export default function Dashboard() {
  return (
    <div className="bg-[#F8F8F8] p-6 min-h-screen">
      <h2 className="text-2xl font-semibold p-4">Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center sm:justify-start gap-10">
          <FontAwesomeIcon
            icon={faMoneyBillWave}
            className="text-4xl text-blue-500"
          />
          <div>
            <p className="text-gray-600">Total Expense</p>
            <h4 className="text-lg  2xl:text-3xl font-bold">
              Rs. 5 558 420 /=
            </h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center sm:justify-start gap-10">
          <FontAwesomeIcon
            icon={faPiggyBank}
            className="text-4xl text-purple-500"
          />

          <div>
            <p className="text-gray-600">Gross Profit</p>
            <h3 className="text-lg 2xl:text-3xl font-bold">Rs. 237 813/=</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center sm:justify-start gap-10">
          <FontAwesomeIcon
            icon={faWarehouse}
            className="text-4xl text-green-500"
          />

          <div>
            <p className="text-gray-600">Items</p>
            <h3 className="text-lg 2xl:text-3xl font-bold">9</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center sm:justify-start gap-10">
          <FontAwesomeIcon icon={faUndo} className="text-4xl text-red-500" />

          <div>
            <p className="text-gray-600">Sales Returns</p>
            <h3 className="text-lg 2xl:text-3xl font-bold">Rs. 43 703 /=</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-lg shadow lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Profit & Loss Overview</h3>
          <ProfitLossChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Overall Report</h3>
          <PieChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">
            Stock Depletion Analysis
          </h3>
          <StockAnalysisChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Top Sales (Dec.)</h3>
          <table className="w-full border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 text-left p-2">Code</th>
      <th className="border border-gray-300 text-left p-2">Name</th>
      <th className="border border-gray-300 text-left p-2">Qty</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">01</td>
      <td className="border border-gray-300 p-2">IPhone 13</td>
      <td className="border border-gray-300 p-2">22</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">02</td>
      <td className="border border-gray-300 p-2">Redmi Note 8</td>
      <td className="border border-gray-300 p-2">45</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">03</td>
      <td className="border border-gray-300 p-2">Samsung Galaxy 4</td>
      <td className="border border-gray-300 p-2">18</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">04</td>
      <td className="border border-gray-300 p-2">Samsung Note 4</td>
      <td className="border border-gray-300 p-2">52</td>
    </tr>
  </tbody>
</table>

        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Top Suppliers (Dec.)</h3>
          <table className="w-full border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 text-left p-2">Code</th>
      <th className="border border-gray-300 text-left p-2">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">01</td>
      <td className="border border-gray-300 p-2">Saman Silva</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">02</td>
      <td className="border border-gray-300 p-2">Sahan Udara</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">03</td>
      <td className="border border-gray-300 p-2">Suneth Uswatte</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 p-2">04</td>
      <td className="border border-gray-300 p-2">Mouse</td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
}
