import React, { useState } from 'react';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 shadow-lg fixed text-white top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-white text-2xl font-bold">Logo</div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button focus:outline-none"
            >
              <svg
                className="h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? 'hidden' : 'block'}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
                <path
                  className={`${isOpen ? 'block' : 'hidden'}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.636 6.464L6.05 5.05l13.131 13.132-1.414 1.414L4.636 6.464zM20 5l-1.414 1.414L8.455 17.95l1.414 1.414L20 6.414V5z"
                />
              </svg>
            </button>
          </div>
          <nav className={`md:flex space-x-6 md:space-x-0 md:justify-end md:relative ${isOpen ? 'block' : 'hidden'}`}>
            <div className="md:block">
              <a href="/personajes" className="nav-link block md:inline-block">Personajes</a>
              <a href="/items" className="nav-link block md:inline-block">Items</a>
              <a href="#" className="nav-link block md:inline-block">Servicios</a>
              <a href="#" className="nav-link block md:inline-block">Contacto</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TopBar;