'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SearchBar from "./Searchbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isSmallDevice = useMemo(() => {
    if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
    }
    return false; 
}, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useMemo(() => {
    return debounce(() => {
      setScrollY(window.scrollY);
    }, 100); 
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const headerStyle = useMemo(() => {
    return {
      backgroundColor: isSmallDevice
        ? "white"
        : `rgba(255, 255, 255, ${scrollY > 0 ? 0.9 : 0})`,
      color: isSmallDevice ? "black" : scrollY > 0 ? "black" : '#D4AF37',
    };
  }, [isSmallDevice, scrollY]);

  const logoStyle = useMemo(() => {
    return {
      transform: `scale(${scrollY > 0 ? 1.1 : 1})`,
      transition: "transform 0.3s ease",
    };
  }, [scrollY]);

  return (
    <header
      className="fixed top-0 z-50 w-full text-2xl flex justify-between items-center py-4 px-8 "
      style={headerStyle}
    >
      <Link href="/" className="flex items-center gap-4">
        LOGO
      </Link>
      <DesktopMenu />
      {!isSmallDevice && <SearchBar />}
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
