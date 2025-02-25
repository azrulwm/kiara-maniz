'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import mainLogo from '@public/main-logo.svg';
import { ROUTES } from '@/config/route';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: ROUTES.ABOUT, label: 'About' },
    { href: ROUTES.RECRUITMENT, label: 'Recruitment' },
    { href: ROUTES.HR_CONSULTANCY, label: 'HR Consultancy' },
    { href: ROUTES.CONTACT, label: 'Contact Us' },
  ];

  return (
    <nav className="bg-primary">
      <div className="container">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href={ROUTES.HOME}>
              <Image
                src={mainLogo}
                alt="Brand Logo"
                width={120}
                height={40}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-bold text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
