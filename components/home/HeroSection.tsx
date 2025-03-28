import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-sky z-0"></div>
      
      {/* Imagem de fundo com montanhas */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/mountains-background.png" // Placeholder - criar esta imagem
          alt="Montanhas"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-20 flex h-full w-full items-center justify-center text-center text-white">
        <div className="container-custom pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            {/* Círculo com imagem destacada */}
            <div className="mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white sm:h-48 sm:w-48 md:h-56 md:w-56">
              <div className="relative h-full w-full">
                <Image
                  src="/images/refugio-feature.jpg" // Placeholder - criar esta imagem
                  alt="Refúgio Haras"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-lora text-4xl font-medium md:text-5xl lg:text-6xl"
            >
              REFÚGIO HARAS
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-lg md:text-xl"
            >
              Um recanto de paz e tranquilidade em Serra da Raiz - PB
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8"
            >
              <a
                href="#reservas"
                className="btn-primary px-8 py-3 text-lg shadow-lg"
              >
                Faça sua reserva
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Ornamento inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 