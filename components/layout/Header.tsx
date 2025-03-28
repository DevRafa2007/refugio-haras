import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-10 flex items-center"
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary mr-3">
            <Image
              src="/images/logo-circular.png" // Placeholder - criar esta imagem
              alt="Refúgio Haras"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
          <span className={cn(
            "font-lora text-xl font-medium transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Refúgio Haras
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <FaTimes className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <FaBars className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-xl font-medium text-gray-800 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 