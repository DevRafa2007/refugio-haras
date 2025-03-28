import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const atracoes = [
  {
    id: 1,
    title: "Trilhas Naturais",
    description: "Explore trilhas cercadas pela natureza exuberante da região.",
    icon: "🥾",
  },
  {
    id: 2,
    title: "Cachoeiras",
    description: "Visite as cachoeiras próximas e se refresque nas águas cristalinas.",
    icon: "💦",
  },
  {
    id: 3,
    title: "Gastronomia Local",
    description: "Experimente os sabores autênticos da culinária paraibana.",
    icon: "🍽️",
  },
  {
    id: 4,
    title: "Artesanato",
    description: "Conheça o artesanato local e leve uma lembrança especial.",
    icon: "🧶",
  },
];

export default function DescobertasSection() {
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
    <section id="descobertas" ref={ref} className="section-padding pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
      >
        <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl text-primary mb-3 md:mb-4">
          Descobrindo Serra da Raiz - PB
        </h2>
        <p className="text-gray-700">
          Um lugar encantador escondido na Paraíba, repleto de belezas naturais, 
          cultura rica e hospitalidade. Conheça os encantos que a região tem a oferecer.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-16 items-center px-4">
        {/* Imagem ilustrativa */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-primary bg-opacity-10 z-10 rounded-xl"></div>
            <Image
              src="/images/serra-da-raiz.jpg" // Placeholder - criar esta imagem
              alt="Serra da Raiz - PB"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Lista de atrações */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full md:w-1/2 mt-6 md:mt-0"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {atracoes.map((atracao) => (
              <motion.div
                key={atracao.id}
                variants={itemVariants}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{atracao.icon}</div>
                <h3 className="font-lora text-lg sm:text-xl text-primary mb-1 sm:mb-2">
                  {atracao.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {atracao.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 sm:mt-12 text-center"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <a 
          href="https://pt.wikipedia.org/wiki/Serra_da_Raiz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md"
        >
          Saiba mais sobre Serra da Raiz
          <FaArrowRight className="ml-2" size={16} />
        </a>
      </motion.div>
    </section>
  );
} 