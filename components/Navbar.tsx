'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a
            href="https://www.neudev.web.id"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/neudev.jpeg"
              alt="NeudevPublisher Logo"
              width={40}
              height={40}
              className="rounded-md"
              priority
            />
            <span className="text-lg font-semibold text-gray-900">
              NeudevPublisher
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-4 rounded text-gray-700 hover:bg-gray-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
