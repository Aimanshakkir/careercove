import React from 'react';
import { Briefcase, LogOut } from 'lucide-react';

const Navbar = ({ isLoggedIn, userRole, onLogout, setCurrentScreen }) => (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Briefcase className="h-8 w-8" />
        <h1 
          className="text-2xl font-bold cursor-pointer" 
          onClick={() => setCurrentScreen('home')}
        >
          JobPortal Pro
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <button 
              onClick={() => setCurrentScreen('login')}
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
            >
              Login
            </button>
            <button 
              onClick={() => setCurrentScreen('signup')}
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded transition duration-200"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <span className="capitalize">Welcome, {userRole}!</span>
            <button 
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center space-x-1 transition duration-200"
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

export default Navbar;