import { IconBaselineDensitySmall, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => {
      setShowMenu(!showMenu);
   };

   const navList = [
      { to: '/home', text: 'Home' },
      { to: '/users', text: 'Users' },
      { to: '/login', text: 'Login' },
   ];

   return (
      <nav className='bg-gray-800'>
         <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-24'>
               <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                     <span className='text-white font-bold '>Reqes API</span>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                     <div className='flex space-x-4'>
                        {navList.map((item, index) => (
                           <Link
                              key={index}
                              to={`${item.to}`}
                              className={
                                 item.text === 'Login'
                                    ? 'text-gray-300 bg-red-600 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                              }
                           >
                              {item.text}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
               <div className='block sm:hidden'>
                  <button
                     onClick={toggleMenu}
                     className='text-gray-400 hover:text-white focus:outline-none'
                  >
                     <svg
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        {showMenu ? <IconX /> : <IconBaselineDensitySmall />}
                     </svg>
                  </button>
               </div>
            </div>
            {showMenu && (
               <div className='sm:hidden'>
                  <div className='px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center'>
                     {navList.map((item, index) => (
                        <Link
                           key={index}
                           to={`${item.to}`}
                           className={
                              item.text === 'Login'
                                 ? 'text-gray-300 bg-red-600 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                           }
                        >
                           {item.text}
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
