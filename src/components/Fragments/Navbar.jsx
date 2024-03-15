import { Link } from 'react-router-dom';

const Navbar = () => {
   const navList = [
      { to: '/home', text: 'Home' },
      { to: '/users', text: 'Users' },
   ];

   return (
      <nav className='bg-gray-800'>
         <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
               <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                     <span className='text-white font-bold'>Reqes API</span>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                     <div className='flex space-x-4'>
                        {navList.map((item, index) => (
                           <Link
                              key={index}
                              to={`${item.to}`}
                              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                           >
                              {item.text}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
