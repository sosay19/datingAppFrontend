import React from 'react';
import Link from 'next/link';
import ProfilePicture from '../assets/images/lotus-flower.png'; // Import the image
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 text-gray-700 h-20 w-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Left Section */}
        <div className="flex items-center flex-1">
          <Image
            src={ProfilePicture}
            alt="Profile"
            className="w-10 h-10 rounded-full"
            height={40}
            width={40}
          />
          <h1 className="text-3xl font-semibold text-gray-700 ml-2">NikahNest</h1>
        </div>
        <div className="flex items-center flex-1"> {/* Use flex-1 to make it grow */}
          {/* Middle Section (Search Bar) */}
          <div className="relative cursor-pointer">
            <input
              type="text"
              className="py-2 px-3 rounded-md border-gray-300 focus:ring focus:ring-primary"
              placeholder="Search for someone..."
            />
            <div className="hidden absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-10 right-0 hidden group-hover:block bg-white text-gray-700 border border-gray-200 shadow-md rounded-lg py-1 px-3">
              <p>Display Name</p>
              <Link href="/logout">
                <div className="text-red-500 hover:underline">Log Out</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-1"> {/* Use flex-1 to make it grow */}
          {/* Content for the right section */}
          {/* Right Section (Notifications) */}
          <i className="fas fa-bell text-xl text-gray-700 group"></i>
          <div className="hidden absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="absolute top-6 right-0 hidden group-hover:block bg-white text-gray-700 border border-gray-200 shadow-md rounded-lg py-1 px-3">
            <p>You have 3 notifications.</p>
          </div>
        </div>
      </div>
    </header>


  );
};

export default Header;


