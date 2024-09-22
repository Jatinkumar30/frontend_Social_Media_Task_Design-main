import React from 'react';
import { FaWallet, FaShareAlt } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiSpeakerphone } from "react-icons/hi";

const WalletEarningsReferrals = () => {
  return (
    <div className="bg-yellow-400 p-4 rounded-lg shadow-lg relative z-0">
      <h2 className="text-center text-xl flex font-semibold text-white mb-6"> <HiSpeakerphone color='black' size='30' /> Taskplanet. Get 10 Points on every referral.</h2>
      <div className="flex justify-between items-center text-center">

        <div className="flex-1 flex flex-col items-center rounded-2xl mx-2 py-2 bg-slate-100">
          <FaWallet className="text-green-600 text-4xl mb-2" />
          <p className="font-bold text-lg">₹2875.00</p>
          <p className="text-sm text-gray-600">Wallet</p>
        </div>


        <div className="flex-1 flex flex-col items-center rounded-2xl py-2 bg-slate-100">
          <BsCurrencyDollar className="text-blue-600 text-4xl mb-2" />
          <p className="font-bold text-lg">₹2875.00</p>
          <p className="text-sm text-gray-600">Earnings</p>
        </div>

        <div className="flex-1 flex flex-col items-center rounded-2xl mx-2 py-2 bg-slate-100">
          <FaShareAlt className="text-yellow-600 text-4xl mb-2" />
          <p className="font-bold text-lg text-orange-500">2417</p>
          <p className="text-sm text-gray-600">Referrals</p>
        </div>
      </div>
    </div>
  );
};

export default WalletEarningsReferrals;
