

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);



  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

 const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
  ];
 

    const isActive = (path: string) => pathname === path;

  const NavLink = ({
    href,
    children,
    active = false,
  }: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
  }) => (
    <Link href={href}>
      <div
        className={`relative cursor-pointer font-medium transition-colors duration-300 ${
          isScrolled
            ? `text-slate-700 hover:text-white transition-colors duration-300 ${active ? 'text-white' : ''}`
            : `text-white hover:text-gold ${active ? 'text-white' : ''}`
        }`}
      >
        {children}
        {active && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-full ${
              isScrolled ? 'bg-green-400' : 'bg-green-800'
            }`}
          />
        )}
      </div>
    </Link>
  );

  const MobileNavLink = ({
    href,
    children,
    active = false,
  }: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
  }) => (
    <Link href={href} onClick={() => setMobileMenuOpen(false)}>
      <div
        className={`px-4 py-2 border-l-4 transition-all duration-200 ${
          active
            ? 'border-green-300 bg-indigo-50 text-gold font-medium'
            : 'border-transparent hover:border-green-500 hover:bg-green-800/50 text-black'
        }`}
      >
        {children}
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-400 shadow-md py-4' : 'bg-green-700 py-4 text-white'
      }`}
    >
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <div
            className={`font-bold text-xl md:text-2xl flex items-center  ${
              isScrolled ? 'text-green-900' : 'text-white'
            }`}
          >
            {/* <Image
            src='/images/logom.png'
            alt='Logo'
            width={40}
            height={40}
            className='mr-2'
             /> */}
       
            <span>Finnery Nutritional Centre</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              href={item.path}
              active={isActive(item.path)}
            >
              {item.name}
            </NavLink>
          ))}

          <Link href="/contact">
          <button
            className={`hover:bg-green-800/50] ${
              isScrolled ? 'bg-green-300' : 'bg-green-800'
            } text-white py-2 px-6 rounded font-medium transition-colors duration-300`}
          >
            Contact
          </button>
          
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="py-4 px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  href={item.path}
                  active={isActive(item.path)}
                >
                  {item.name}
                </MobileNavLink>
              ))}

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-full mt-4">
                  <button className="w-full py-2 text-sm bg-green-700 hover:bg-green-700/50 text-white rounded-md">
                    Contact
                  </button>
                </div>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}