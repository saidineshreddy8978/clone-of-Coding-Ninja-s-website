import React from 'react';
import { Code2, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-[#f78c40]" />
            <span className="ml-2 text-xl font-bold">Coding Ninjas</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#f78c40]">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#f78c40]">Community</a>
            <a href="#" className="text-gray-700 hover:text-[#f78c40]">Practice</a>
            <div className="flex items-center space-x-4">
              <button className="text-[#f78c40] font-medium">Login</button>
              <button className="bg-[#f78c40] text-white px-6 py-2 rounded-md hover:bg-[#e67e3a]">
                Enroll Now
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block py-2 text-gray-700 hover:text-[#f78c40]">Courses</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-[#f78c40]">Community</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-[#f78c40]">Practice</a>
            <div className="pt-2 space-y-2">
              <button className="w-full text-[#f78c40] font-medium py-2">Login</button>
              <button className="w-full bg-[#f78c40] text-white py-2 rounded-md hover:bg-[#e67e3a]">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}