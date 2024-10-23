import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMobileScreen,
  faPenToSquare,
  faLayerGroup,
  faPrint,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <div className="p-4">
      <h3 className="text-2xl font-extrabold">TrackIt</h3>
      <ul className="mt-5 space-y-4">
        <div className="flex flex-row items-center gap-x-4">
          <FontAwesomeIcon icon={faHouse} />
          <a href="/home" className="py-4 text-xl">Dashboard</a>
        </div>

        {/* Products Dropdown */}
        <div>
          <div
            className="flex items-center justify-between gap-x-4 cursor-pointer"
            onClick={toggleProductsDropdown}
          >
            <div className="flex items-center gap-x-2 w-full">
              <FontAwesomeIcon icon={faMobileScreen} />
              <li className="py-4 text-xl list-none">Products</li>
            </div>
            <FontAwesomeIcon
              icon={isProductsOpen ? faAngleDown : faAngleRight}
              className="transition-transform duration-300"
            />
          </div>
          {isProductsOpen && (
            <div className="ml-6 mt-2 space-y-2 bg-gray-50 p-2 rounded-md shadow-inner transition-all duration-300">
              <a
                href="/addproduct"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Add New Product
              </a>
              <a
                href="/viewinventory"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                View Inventory
              </a>
            </div>
          )}
        </div>

        {/* GRN */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2 w-full">
            <FontAwesomeIcon icon={faPenToSquare} />
            <li className="py-4 text-xl list-none">GRN</li>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>

        {/* Sales */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2 w-full">
            <FontAwesomeIcon icon={faLayerGroup} />
            <li className="py-4 text-xl list-none">Sales</li>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>

        {/* Returns */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
              />
            </svg>
            <li className="py-4 text-xl list-none">Returns</li>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>

        {/* Reports */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2 w-full">
            <FontAwesomeIcon icon={faPrint} />
            <li className="py-4 text-xl list-none">Reports</li>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
