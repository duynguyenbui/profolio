'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './ui/mode-toggle';
import { ExternalLinkIcon, MenuIcon, StarsIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Adjust 768 to your actual mobile breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0, display: 'block' },
    closed: { opacity: 0, y: '-100%', transitionEnd: { display: 'none' } },
  };
  // TODO: Figure out if bg-white/90 dark:bg-black/90 or the current one is better (the current one)

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white/30 bg-opacity-20 backdrop-blur-lg dark:bg-black/30">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center justify-center">
          {/* TODO: Swap this out with a good icon */}
          <StarsIcon className="h-9 w-9 text-blue-500" />
        </Link>
        {/* Hamburger Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="sr-only">{isOpen ? 'Close' : 'Menu'}</span>
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
        {/* Navigation Menu */}
        <div className="hidden md:flex md:w-auto md:items-center">
          <nav className="flex gap-4 lg:gap-6">
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#about"
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#education"
            >
              Education
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#contact"
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
        </div>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-full w-full bg-white md:hidden dark:bg-black"
        >
          <div className="flex flex-col gap-4 p-4">
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#education"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#projects"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
