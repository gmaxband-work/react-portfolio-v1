import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <p className='text-[25px]  font-bold leading-[1] min-h-[20px] flex flex-row'>
              <span className='text-gradient leading-[0.85]'>GMAX</span>
              <span>BAND</span>
            </p>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
