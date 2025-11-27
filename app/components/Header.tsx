
// components/Header.tsx
import { FC } from "react";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: FC<HeaderProps> = ({ toggleMobileMenu }) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md fixed top-0 z-20 shadow-md">
      <div className="text-2xl font-bold text-blue-900">RGG</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 font-semibold text-blue-900">
        <a href="#">Tours & Travels</a>
        <a href="#">Jobs</a>
        <a href="#">Healthcare</a>
        <a href="#">Study Abroad</a>
        <a href="#">Insurance</a>
        <a href="#">Virtual University</a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col gap-1"
        aria-label="Open mobile menu"
      >
        <span className="block w-6 h-0.5 bg-blue-900 rounded"></span>
        <span className="block w-6 h-0.5 bg-blue-900 rounded"></span>
        <span className="block w-6 h-0.5 bg-blue-900 rounded"></span>
      </button>
    </header>
  );
};

export default Header;