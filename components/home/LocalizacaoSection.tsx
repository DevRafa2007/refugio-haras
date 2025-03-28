import React from "react";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT_INFO } from "@/lib/constants";

export default function LocalizacaoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Gera URL do Google Maps para direções
  const getDirectionsUrl = () => {
    const destination = `${CONTACT_INFO.location.address}, ${CONTACT_INFO.location.city}, ${CONTACT_INFO.location.state}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  };

  return (
    <section id="localizacao" ref={ref} className="section-padding">
      <div className="bg-earth-light bg-opacity-20 rounded-xl py-8 px-4 sm:py-10 sm:px-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <motion.div 
            className="inline-flex justify-center items-center bg-primary bg-opacity-20 rounded-full p-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaMapMarkerAlt className="text-primary" size={24} />
          </motion.div>
          <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl text-primary mb-3 md:mb-4">
            Localização
          </h2>
          <p className="text-gray-700 px-2">
            Estamos localizados em Serra da Raiz - PB, um lugar de beleza natural e tranquilidade.
            Confira nosso mapa e veja como chegar ao Refúgio Haras.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {/* Mapa iframe do Google Maps - responsivo */}
          <div className="relative w-full aspect-w-16 aspect-h-9 sm:aspect-h-7 md:aspect-h-9 min-h-[250px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                `${CONTACT_INFO.location.address}, ${CONTACT_INFO.location.city}, ${CONTACT_INFO.location.state}`
              )}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Refúgio Haras"
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="font-lora text-xl text-primary mb-2">Endereço</h3>
              <p className="text-gray-700">
                {CONTACT_INFO.location.address}
                <br />
                {CONTACT_INFO.location.city} - {CONTACT_INFO.location.state}
                <br />
                CEP: {CONTACT_INFO.location.postalCode}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href={getDirectionsUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white font-medium px-4 py-3 rounded-lg transition-colors hover:bg-opacity-90"
            >
              <FaDirections className="mr-2" size={18} />
              Como chegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 