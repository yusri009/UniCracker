import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-white shadow-default z-50">
      <nav className="container flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="UniCracker Logo"
            className="h-10 w-auto -mt-2"
            width={180}
          />
          <h1 className="text-2xl font-bold text-primary select-none">UniCracker</h1>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-text hover:text-primary transition-default ${
                  isActive ? "text-primary border-b-4 border-primary" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courseorder"
              className={({ isActive }) =>
                `font-medium text-text hover:text-primary transition-default ${
                  isActive ? "text-primary border-b-4 border-primary" : ""
                }`
              }
            >
              Course Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `font-medium text-text hover:text-primary transition-default ${
                  isActive ? "text-primary border-b-4 border-primary" : ""
                }`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Login Button Desktop */}
        <NavLink
          to="/login"
          className="hidden md:inline-block px-5 py-2 font-medium text-text border border-primary rounded transition-default hover:bg-primary hover:text-white select-none"
        >
          Login
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleNav}
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-card flex flex-col px-6 pt-10 gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-medium text-text hover:text-primary transition-default ${
                isActive ? "text-primary border-b-4 border-primary" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courseorder"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-medium text-text hover:text-primary transition-default ${
                isActive ? "text-primary border-b-4 border-primary" : ""
              }`
            }
          >
            Course Order
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-medium text-text hover:text-primary transition-default ${
                isActive ? "text-primary border-b-4 border-primary" : ""
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-auto px-5 py-2 font-medium text-text border border-primary rounded transition-default hover:bg-primary hover:text-white select-none text-center"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
