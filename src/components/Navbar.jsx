// import React from 'react';
// import { BlendIcon, LogOut } from 'lucide-react';


// const Navbar = ({ isLoggedIn, userRole, onLogout, setCurrentScreen }) => (
//     <nav className=" fixed top-0 left-0 w-full bg-transparent text-[#364F6B]  p-4 z-50 shadow-md h-20 ">
//     <div className="container mx-auto flex justify-between items-center">
//       <div className="flex items-center space-x-2">
//         <BlendIcon className="h-8 w-8" />
//         <h1 
//           className="text-2xl text-[#45A29E] font-bold cursor-pointer" 
//           onClick={() => setCurrentScreen('Home')}
//         >
//           CareerCove
//         </h1>
//       </div>
//       <div className="flex items-center space-x-4">
//         {!isLoggedIn ? (
//           <>
//             <button 
//               onClick={() => setCurrentScreen('login')}
//               className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => setCurrentScreen('signup')}
//               className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded transition duration-200"
//             >
//               Sign Up
//             </button>
//           </>
//         ) : (
//           <>
//             <span className="capitalize">Welcome, {userRole}!</span>
//             <button 
//               onClick={onLogout}
//               className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center space-x-1 transition duration-200"
//             >
//               <LogOut className="h-4 w-4" />
//               <span>Logout</span>
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


// import React, { useState } from 'react';
// import { BlendIcon, LogOut } from 'lucide-react';

// const Navbar = ({ isLoggedIn, userRole, onLogout, setCurrentScreen }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-tranparent backdrop-opacity text-[#364F6B] z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center space-x-2">
//           <BlendIcon className="h-8 w-8" />
//           <h1
//             className="text-2xl text-[#45A29E] font-bold cursor-pointer"
//             onClick={() => setCurrentScreen('Home')}
//           >
//             CareerCove
//           </h1>
//         </div>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-2xl font-bold focus:outline-none"
//         >
//           ☰
//         </button>

//         <div className="hidden md:flex items-center space-x-4">
//           {!isLoggedIn ? (
//             <>
//               <button
//                 onClick={() => setCurrentScreen('login')}
//                 className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setCurrentScreen('signup')}
//                 className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <>
//               <span className="capitalize">Welcome, {userRole}!</span>
//               <button
//                 onClick={onLogout}
//                 className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center space-x-1"
//               >
//                 <LogOut className="h-4 w-4" />
//                 <span>Logout</span>
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4">
//           {!isLoggedIn ? (
//             <>
//               <button
//                 onClick={() => setCurrentScreen('login')}
//                 className="block w-full bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mb-2"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setCurrentScreen('signup')}
//                 className="block w-full bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <>
//               <span className="block mb-2">Welcome, {userRole}!</span>
//               <button
//                 onClick={onLogout}
//                 className="w-full bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex justify-center items-center space-x-2"
//               >
//                 <LogOut className="h-4 w-4" />
//                 <span>Logout</span>
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { BlendIcon, LogOut } from 'lucide-react';

const Navbar = ({ isLoggedIn, userRole, onLogout, setCurrentScreen }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50  transition-transform duration-300 ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    } bg-white/10 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <BlendIcon className="h-8 w-8" />
          <h1
            className="text-2xl text-[#45A29E] font-bold cursor-pointer"
            onClick={() => setCurrentScreen('Home')}
          >
            CareerCove
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setCurrentScreen('login')}
                className="bg-[#4FD1C5] hover:bg-[#38B2AC] px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                onClick={() => setCurrentScreen('signup')}
                className="bg-[#EC4899] hover:bg-[#DB2777] px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span className=" text-white font-mono capitalize">Welcome, {userRole}!</span>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center space-x-1"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
