import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import React from "react";

function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Project</h2>

        {/* Form */}

        <form className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-md">
                <input type="text" placeholder="Username..." className="flex-1 py-2 px-4 focus:outline-none focus:border-blue-500 rounded-l-md" />
                <span className="bg-gray-100 p-2 rounded-r-md">
                <FontAwesomeIcon icon={faUser} />
                </span>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md">
                <input type="text" placeholder="Password..." className="flex-1 py-2 px-4 focus:outline-none focus:border-blue-500 rounded-l-md" />
                <span className="bg-gray-100 p-2 rounded-r-md">
                <FontAwesomeIcon icon={faEye} />
                </span>
            </div>
            <div className="text-right">
                <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password</a>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition duration-150 ease-in-out">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
