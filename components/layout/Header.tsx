import React, {useState} from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gray-200 shadow-md py-2 mb-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
            {/* Logo */}
            <h2 className="font-bold text-2xl text-indigo-600">SiteLogo</h2>
            {/* Hamburger for mobile */}
            <button className="md:hidden bg-white p-2 rounded-md shadow-md" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>
            <div className={`flex flex-col  md:items-center gap-4 w-full md:w-auto ${menuOpen ? "block": "hidden md:flex"}`}>
                 {/* Dropdown + Search */}
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
                    {/* Dropdown */}
                    <div className="relative">
                        <select className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 gap-x-6">
                            <option>Rooms</option>
                            <option>Mansion</option>
                            <option>Countryside</option>
                            <option>Apartment</option>
                        </select>
                    </div>
                    {/* Search */}
                    <div className="flex items-center bg-white border rounded-full shadow-md px-6 py-1 gap-4">
                        <input type="text" placeholder="Where are you going?" className="flex-1 outline-none text-gray-700"/>
                        <button className="bg-gray-200 text-white rounded-full p-1">🔍</button>
                    </div>
                </div>
                {/* Nav */}
                <nav className="Navigation">
                    <ul className="flex gap-4 text-gray-700 font-medium items-center">
                        <li><a href="#" className="text-sm hover:text-sky-300 font-bold">Sign In</a></li>
                        <li><a href="#" className="text-sm hover:text-sky-300 font-bold">Sign Out</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
  );
};

export default Header;



// import React, { useState } from "react";

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-gray-100 shadow-md py-4 mt-5">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
//             {/* Logo */}
//             <h2 className="font-bold text-2xl text-indigo-600">SiteLogo</h2>

//             {/* Hamburger for mobile */}
//             <button className="md:hidden bg-white p-2 rounded-md shadow-md" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>
//             {/* Main menu */}
//             <div className={`flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto ${
//                 menuOpen ? "block" : "hidden md:flex"}`}>
//                 {/* Dropdown + Search */}
//                 <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
//                     <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 w-full sm:w-auto">
//                         <option>Rooms</option>
//                         <option>Mansion</option>
//                         <option>Countryside</option>
//                         <option>Apartment</option>
//                     </select>

//                     <div className="flex items-center bg-white border rounded-full shadow-md px-4 py-1 gap-2 w-full sm:w-auto">
//                         <input type="text" placeholder="Where are you going?" 
//                          className="flex-1 outline-none text-gray-700"/>
//                         <button className="bg-gray-200 text-white p-1 rounded-full">🔍</button>
//                     </div>
//                 </div>

//                 {/* Navigation */}
//                 <nav>
//                     <ul className="flex flex-col md:flex-row gap-4 text-gray-700 font-medium mt-2 md:mt-0">
//                         <li><a href="#">Sign In</a></li>
//                         <li><a href="#">Sign Out</a></li>
//                     </ul>
//                 </nav>
//             </div>
//          </div>
//     </header>
//   );
// };

// export default Header;