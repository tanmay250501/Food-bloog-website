import React, { useState, useRef } from "react";

export const Navbar = ({ setShowLoginForm, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
  };

  return (
    <nav className="bg-white border-gray-200 border-2 p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://www.youtube.com/@nishamadhurimarecipes"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1249956578.1712072062&semt=ais_user_b"
            className="h-16 w-24"
            alt="Food Blog"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Food Blog
          </span>
        </a>

        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={handleMenuToggle}
            className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5h14M3 10h14M3 15h14"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
          <div className="relative hidden md:block">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer"
              onClick={handleSearchClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
          </div>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer"
              onClick={ () =>{handleSearchClick();
                handleMenuToggle();
                }}
              
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => { 
                setInputValue(e.target.value);
                }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                  handleMenuToggle();
                }
              }}
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li ref={dropdownRef}>
              <div
                onClick={() => setShowLoginForm(true)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer"
              >
                <div className="flex justify-center ml-10 md:ml-0">
                  <p className="">Login </p>
                  <i className="fa-regular fa-circle-user text-[32px] ml-4 font-semibold"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
