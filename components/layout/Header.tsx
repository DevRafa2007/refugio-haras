import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detecta scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Atualiza a seção ativa com base no scroll
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para prevenir rolagem quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
          <motion.div 
            className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden rounded-full border-2 border-primary mr-2 sm:mr-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/logo-circular.png" // Placeholder - criar esta imagem
              alt="Refúgio Haras"
              fill
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
              className="object-cover"
              priority
            />
          </motion.div>
          <span className={cn(
            "font-lora text-lg sm:text-xl font-medium transition-colors truncate",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Refúgio Haras
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace(/\/#/, "");
              return (
                <motion.li key={item.title} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors relative",
                      isActive
                        ? "text-primary font-semibold"
                        : isScrolled
                        ? "text-gray-800 hover:text-primary"
                        : "text-white hover:text-primary"
                    )}
                  >
                    {item.title}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                        layoutId="activeNavIndicator"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative z-50 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <FaTimes className="text-primary" size={24} />
          ) : (
            <FaBars className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center md:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ul className="flex flex-col space-y-6 text-center">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li 
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.1 + index * 0.1 }
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-xl font-medium text-gray-800 hover:text-primary block py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 