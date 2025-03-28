import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  // Efeito para iniciar animações após o componente montar
  useEffect(() => {
    setIsMounted(true);
    controls.start("visible");
  }, [controls]);

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
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

  // Efeito parallax para o fundo
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-sky z-0"></div>
      
      {/* Imagem de fundo com montanhas - com parallax */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ y: scrollY * 0.2 }}
      >
        <Image
          src="/images/mountains-background.png" // Placeholder - criar esta imagem
          alt="Montanhas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </motion.div>
      
      {/* Conteúdo */}
      <div className="relative z-20 flex h-full w-full items-center justify-center text-center px-4 text-white">
        <div className="container-custom pt-16 sm:pt-20">
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={contentVariants}
            className="mx-auto max-w-3xl"
          >
            {/* Círculo com imagem destacada */}
            <motion.div 
              className="mx-auto mb-6 sm:mb-8 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white bg-white relative"
              variants={circleVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/refugio-feature.jpg" // Placeholder - criar esta imagem
                  alt="Refúgio Haras"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  className="object-cover"
                />
              </div>
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-primary"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <motion.h1
              className="font-lora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium drop-shadow-md"
              variants={itemVariants}
            >
              REFÚGIO HARAS
            </motion.h1>
            
            <motion.p
              className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl drop-shadow"
              variants={itemVariants}
            >
              Um recanto de paz e tranquilidade em Serra da Raiz - PB
            </motion.p>
            
            <motion.div
              className="mt-6 sm:mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="#reservas"
                className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg shadow-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Faça sua reserva
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorações flutuantes ao fundo */}
        <div className="absolute left-0 bottom-32 md:bottom-40 z-10 opacity-60">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-20 h-16 md:w-32 md:h-24 opacity-30"
          >
            <Image
              src="/images/bird-silhouette.png" // Placeholder - criar esta imagem
              alt=""
              width={120}
              height={80}
              className="object-contain"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="absolute right-0 bottom-48 md:bottom-60 z-10 opacity-60">
          <motion.div
            animate={{ y: [-5, 15, -5] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="w-16 h-12 md:w-24 md:h-16 opacity-30"
          >
            <Image
              src="/images/bird-silhouette-2.png" // Placeholder - criar esta imagem
              alt=""
              width={80}
              height={60}
              className="object-contain"
              aria-hidden="true"
            />
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