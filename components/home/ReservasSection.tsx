import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";

export default function ReservasSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="reservas" ref={ref} className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center gap-8 lg:gap-16"
      >
        {/* Texto e botão */}
        <motion.div variants={itemVariants} className="flex-1">
          <div className="max-w-xl">
            <h2 className="font-lora text-3xl md:text-4xl text-primary mb-4">
              Faça sua reserva
            </h2>
            <p className="text-gray-700 mb-6">
              Reserve sua estadia no Refúgio Haras e desfrute de momentos inesquecíveis em meio à natureza. 
              Oferecemos acomodações confortáveis e uma experiência única em Serra da Raiz.
            </p>
            <p className="text-gray-700 mb-8">
              Entre em contato conosco via WhatsApp para verificar disponibilidade e fazer sua reserva.
              Nossa equipe está pronta para atendê-lo e garantir que sua estadia seja perfeita.
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <FaWhatsapp className="mr-2" size={20} />
              Reservar pelo WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div variants={itemVariants} className="flex-1">
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-primary bg-opacity-20 z-10 rounded-lg"></div>
            <Image
              src="/images/accommodation.jpg" // Placeholder - criar esta imagem
              alt="Acomodações Refúgio Haras"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 