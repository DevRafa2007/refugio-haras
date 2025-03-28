import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT_INFO } from "@/lib/constants";

export default function LocalizacaoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="localizacao" ref={ref} className="section-padding">
      <div className="bg-earth-light bg-opacity-20 rounded-xl py-10 px-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex justify-center items-center bg-primary bg-opacity-20 rounded-full p-3 mb-4">
            <FaMapMarkerAlt className="text-primary" size={24} />
          </div>
          <h2 className="font-lora text-3xl md:text-4xl text-primary mb-4">
            Localização
          </h2>
          <p className="text-gray-700">
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
          {/* Mapa iframe do Google Maps */}
          <div className="aspect-w-16 aspect-h-9 w-full h-96">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-white rounded-lg p-6 shadow-md">
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
      </div>
    </section>
  );
} 