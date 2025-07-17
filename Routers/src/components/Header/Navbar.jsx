import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {

const data = [
    {id: 1, to: '/', name: 'Home'},
    {id: 2, to: '/login', name: 'Login'},
    {id: 3, to: '/Adduser', name: 'Add user'},
    {id: 4, to: '/About', name: 'About'},
    {id: 5, to: '/Contact', name: 'Contact'},
    {id: 6, to: '/Register', name: 'Register'},
    {id: 7, to: '/users', name: 'Users'},
    {id: 8, to: '/TodoList', name: 'Todolist'},
    {id: 9, to: '/Products/ReadProducts', name: 'ReadProducts'},
    {id: 10, to: '/Products/AddProducts', name: 'AddProducts'},
    {id: 11, to: '/storage', name: 'Storage'},
    {id: 12, 
        title: 'Hooks🔻',
        links: [
            {to: '/hooks/useRef', name: 'useRef'},
            {to: '/hooks/useMemo', name: 'useMemo'},
            {to: '/hooks/useReducer', name: 'useReducer'},
            {to: '/hooks/useContext', name: 'useContext'},
            {to: '/hooks/useState', name: 'useState'},
        ]
    }
]    

  return (
    <nav className="bg-[#1F2937] text-white px-6 py-3 flex justify-between items-center">
        {/* left */}

      <div className="flex text-sm items-center space-x-6">
          <Link to='/' className="text-lg font-semibold">Logo</Link>
        {
            data.map((item, idx) => (
                    <div key={idx}>
                        <>
                            <Link to={item.to} className="hover:underline">{item.name}</Link>
                        </>

                        {/* dropdown */}

                    {item.id === 12 && (
                        <div className="relative cursor-pointer group">
                            {item.title}
                                <ul className="p-2 rounded absolute z-10 bg-[#1F2937] shadow hidden group-hover:block">
                                {
                                    item.links.map((item, idx) => (
                                        <li key={idx} className="hover:underline py-1"><Link to={item.to}>{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>

                    )}
                    </div>
                    
            ))
        }
        </div>

      {/* Right side: Search input + button */}
      <div className="flex items-center space-x-2 text-white">
        <input type="text" placeholder="Search" className="px-3 py-1 rounded border border-gray-300"/>
        <button className="px-3 py-1 bg-[#065f46] text-white rounded hover:bg-[#047857]">Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
