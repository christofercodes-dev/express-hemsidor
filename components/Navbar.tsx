'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white backdrop-blur-md border-b border-neutral-200/50 shadow-sm'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-transparent.svg"
              alt="Express Hemsida"
              width={200}
              height={100}
              className="h-17 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link 
              href="#priser" 
              className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Priser
            </Link>
            <Link 
              href="#process" 
              className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Process
            </Link>
            <Link 
              href="#case" 
              className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Projekt
            </Link>
            <Link 
              href="#kontakt" 
              className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-4">
            <Link
              href="#kontakt"
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 bg-[#1e3a5f] text-white text-[13px] font-medium rounded-full hover:bg-[#162d4a] transition-colors duration-200"
            >
              Kontakta oss
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Öppna meny"
            >
              <span className={`block w-5 h-[1.5px] bg-neutral-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-neutral-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-neutral-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <nav className={`px-6 pb-6 pt-2 flex flex-col gap-4 border-t ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-md border-neutral-200/50' 
            : 'bg-white/90 backdrop-blur-md border-neutral-200/30'
        }`}>
          <Link href="#priser" onClick={() => setIsOpen(false)} className="text-[15px] text-neutral-700 py-1">
            Priser
          </Link>
          <Link href="#process" onClick={() => setIsOpen(false)} className="text-[15px] text-neutral-700 py-1">
            Process
          </Link>
          <Link href="#case" onClick={() => setIsOpen(false)} className="text-[15px] text-neutral-700 py-1">
            Projekt
          </Link>
          <Link href="#kontakt" onClick={() => setIsOpen(false)} className="text-[15px] text-neutral-700 py-1">
            Kontakt
          </Link>
          <Link
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center h-11 mt-2 bg-[#1e3a5f] text-white text-[14px] font-medium rounded-full"
          >
            Kontakta oss
          </Link>
        </nav>
      </div>
    </header>
  );
}