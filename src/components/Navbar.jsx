import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* === LOGO === */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center font-bold">
            {/* Replace the text "IH" with the logo image once you add it */}
            <img src="/logo/logo.png" alt="VIJAY Hardware Logo" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-lg font-semibold dark:text-white">
              VIJAY Hardware
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Tools • Electrical • Plumbing
            </div>
          </div>
        </Link>

        {/* === DESKTOP NAV === */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>
          {/* <Link
            to="/gallery"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Gallery
          </Link> */}
          <Link
            to="/contact"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact
          </Link>

          {/* Dark mode toggle */}
          
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:+911234567890"
            className="p-2 rounded bg-green-600 text-white flex items-center gap-2"
          >
            <Phone size={16} /> Call
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded border dark:border-gray-700"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <div
        className={clsx(
          "md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 transition-all duration-300 overflow-hidden",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>
          {/* <Link
            to="/gallery"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Gallery
          </Link> */}
          <Link
            to="/contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
