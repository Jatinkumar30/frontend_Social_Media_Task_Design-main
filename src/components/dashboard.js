import {
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaUserShield,
  FaUserPlus,
  FaHome,
  FaTasks,
  FaEllipsisH,
} from 'react-icons/fa';

import code from './images/main.png';

const Dashboard = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full overflow-hidden relative">
        <div className="carousel">
          <img src={code} alt="" className="w-full h-48 pb-6 mb-16 md:h-48 object-cover" />
        </div>
        <div className="absolute bottom-0 flex justify-center w-full pb-2">

          <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full mx-1"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
        </div>
      </div>


      <div className="hidden lg:w-[530px] md:flex justify-around py-4 bg-gray-100 fixed bottom-0 left-0 right-0">
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaHome size={28} />
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaTasks size={28} />
          <span className="text-sm">Task</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 space-y-1">
          <FaEllipsisH size={28} />
          <span className="text-sm">More</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
