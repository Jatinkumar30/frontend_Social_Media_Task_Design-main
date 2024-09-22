import {  FaGift, FaUserAlt } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-red-200 to-pink-200 p-3 md:p-4 shadow-lg text-white w-full overflow-hidden">
      <div className="text-lg md:text-xl font-bold flex items-center space-x-2">
        {/* <FaHome className="text-2xl md:text-3xl text-yellow-300" /> */}
        <span className="text-black ">Home</span>
      </div>
      <nav className="flex items-center space-x-4 md:space-x-3">
        {/* <NotificationIcon badgeCount={35} /> */}
        <GiftPoints points={3982} />
        <BalanceInfo balance="₹2875" />
        <SavedPoints points={1000} />
        <UserDropdown />
      </nav>
    </header>
  );
};


const BalanceInfo = ({ balance }) => {
  return (
    <div className="flex items-center bg-green-200 rounded-full px-3 py-1 md:px-4 md:py-2 shadow-md hover:bg-green-300 transition-colors duration-200">
      <LiaRupeeSignSolid  className="text-lg text-green-700" />
      <span className="ml-2 text-green-800 text-sm md:text-base font-medium">
        {balance}
      </span>
    </div>
  );
};

const GiftPoints = ({ points }) => {
  return (
    <div className="flex items-center bg-white rounded-full px-3 py-1 md:px-4 md:py-2 shadow-md hover:bg-red-300 transition-colors duration-200">
      <FaGift className="text-lg text-red-600" />
      <span className="ml-2 text-red-700 text-sm md:text-base font-medium">
        {points}
      </span>
    </div>
  );
};

const SavedPoints = ({ points }) => {
  return (
    <div className="flex items-center bg-white rounded-full px-3 py-1 md:px-4 md:py-2 shadow-md hover:bg-red-300 transition-colors duration-200">
      <LiaRupeeSignSolid className="text-lg text-zinc-900" />
      <span className="ml-2 text-zinc-900 text-sm md:text-base font-medium">
        {points}
      </span>
    </div>
  );
};

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div>
        <FaUserAlt className="text-2xl md:text-3xl text-white" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 md:w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
