import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-gray-500">
      <nav className="w-[1600px] h-[100px] container mx-auto flex items-center justify-between">
        <h1 className="text-[36px] font-[700] text-white">AD Market</h1>
        <div>
          <input
            className="border border-white w-[500px] h-[40px] rounded-[30px] shadow-sm p-[20px] text-white focus:outline-none shadow-white"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-[20px]">
          <h3 className='text-white text-[24px] font-[600]'>Favorites (0)</h3>
          <h3 className='text-white text-[24px] font-[600]'>Purchases</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
