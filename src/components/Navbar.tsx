import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="text-xl font-bold">FixOnGo</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/services" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Services</Link>
            <Link to="/location" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Location</Link>
            <Link to="/dashboard" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Dashboard</Link>
            <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;