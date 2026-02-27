'use client';

import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              NeudevPublisher
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Indonesia-based publisher bringing quality books across diverse
              genres — from fiction to non-fiction, education to lifestyle.
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/neudev_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
              </a>
              <a href="https://neudev.web.id" target="_blank" aria-label="Facebook">
                <FaFacebook className="text-xl hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://neudev.web.id" target="_blank" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://neudev.web.id" target="_blank" aria-label="YouTube">
                <FaYoutube className="text-xl hover:text-red-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  Book Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="https://neudev.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                contact.neudev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram />
                <a
                  href="https://instagram.com/neudev_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @neudev_
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} <a href="https://instagram.com/neudev_" target="_blank" className="hover:text-white transition-colors">Neudev</a>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
