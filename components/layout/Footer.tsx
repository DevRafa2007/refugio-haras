import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-light bg-opacity-20 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="font-lora text-xl font-medium text-primary mb-4">Refúgio Haras</h3>
            <p className="text-gray-700 mb-6">
              Um refúgio de paz e tranquilidade em meio à natureza na Serra da Raiz, 
              oferecendo experiências únicas e acomodações aconchegantes.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-lora text-xl font-medium text-primary mb-4">Links Rápidos</h3>
            <nav>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-lora text-xl font-medium text-primary mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">
                  {CONTACT_INFO.location.address}, {CONTACT_INFO.location.city} - {CONTACT_INFO.location.state}
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="font-lora text-xl font-medium text-primary mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.find(link => link.name === "Instagram")?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.find(link => link.name === "Facebook")?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.find(link => link.name === "WhatsApp")?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} Refúgio Haras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}