import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import profileImage from "../assets/images/dp.jpg";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <div
        ref={sidebarRef}
        className={`bg-white text-black fixed top-0 left-0 h-full transition-all duration-300 ${
          isOpen ? "w-60" : "w-0"
        } overflow-hidden z-20`}
        style={{ maxWidth: "300px" }}
      >
        <SideBar />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex-1 relative">
        <div className="h-20 flex items-center justify-between border-b border-[#EBEBEB]">
          <div
            className={` top-4 left-4 z-30 transition-all duration-300 ${
              isOpen ? "hidden" : "opacity-100"
            }`}
          >
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-black" />
            </button>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover ml-auto mr-4"
          />
        </div>

        <main>
       <Dashboard/>
       </main>
      </div>
    </div>
  );
}
