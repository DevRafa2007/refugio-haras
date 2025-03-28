import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GalleryImage } from "@/types";

// Dados de exemplo para a galeria - substituir por dados reais
const galeriaImagens: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/imagem1.jpg",
    alt: "Vista externa do Refúgio Haras",
    category: "Exterior",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "/images/gallery/imagem2.jpg",
    alt: "Acomodações internas",
    category: "Interiores",
    width: 800,
    height: 600,
  },
  {
    id: "3",
    src: "/images/gallery/imagem3.jpg",
    alt: "Paisagem ao redor",
    category: "Paisagens",
    width: 800,
    height: 600,
  },
  {
    id: "4",
    src: "/images/gallery/imagem4.jpg",
    alt: "Área de lazer",
    category: "Lazer",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    src: "/images/gallery/imagem5.jpg",
    alt: "Café da manhã",
    category: "Gastronomia",
    width: 800,
    height: 600,
  },
  {
    id: "6",
    src: "/images/gallery/imagem6.jpg",
    alt: "Vista do nascer do sol",
    category: "Paisagens",
    width: 800,
    height: 600,
  },
];

const categorias = [
  "Todas",
  ...Array.from(new Set(galeriaImagens.map((img) => img.category))),
];

export default function GaleriaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [imagemAtiva, setImagemAtiva] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const filteredImages =
    categoriaAtiva === "Todas"
      ? galeriaImagens
      : galeriaImagens.filter((img) => img.category === categoriaAtiva);

  // Efeito para prevenir rolagem quando o modal está aberto
  useEffect(() => {
    if (imagemAtiva) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [imagemAtiva]);

  // Atualiza o índice atual quando a imagem ativa muda
  useEffect(() => {
    if (imagemAtiva) {
      const index = filteredImages.findIndex((img) => img.id === imagemAtiva.id);
      setCurrentIndex(index);
    }
  }, [imagemAtiva, filteredImages]);

  // Funções para navegação entre as imagens
  const handlePrevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setImagemAtiva(filteredImages[newIndex]);
  };

  const handleNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setImagemAtiva(filteredImages[newIndex]);
  };

  // Funções para swipe em touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      const newIndex = (currentIndex + 1) % filteredImages.length;
      setImagemAtiva(filteredImages[newIndex]);
    }

    if (isRightSwipe) {
      const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setImagemAtiva(filteredImages[newIndex]);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Teclas de navegação no modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!imagemAtiva) return;

      if (e.key === "ArrowLeft") {
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setImagemAtiva(filteredImages[newIndex]);
      } else if (e.key === "ArrowRight") {
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setImagemAtiva(filteredImages[newIndex]);
      } else if (e.key === "Escape") {
        setImagemAtiva(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imagemAtiva, currentIndex, filteredImages]);

  // Cálculos para as colunas responsivas
  const gridClasses = "grid gap-4 auto-rows-min";
  const gridColClasses = "grid-cols-1 xs:grid-cols-2 md:grid-cols-3";

  return (
    <section id="galeria" ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
      >
        <h2 className="font-lora text-3xl md:text-4xl text-primary mb-4">
          Galeria
        </h2>
        <p className="text-gray-700 mb-6 md:mb-8 px-4">
          Conheça um pouco mais do Refúgio Haras através de nossas imagens. 
          Navegue pela galeria e descubra os encantos do nosso espaço.
        </p>

        {/* Filtros por categoria - responsivo */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
          {categorias.map((categoria) => (
            <motion.button
              key={categoria}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm ${
                categoriaAtiva === categoria
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors`}
              onClick={() => setCategoriaAtiva(categoria)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {categoria}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Grid de imagens - responsivo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${gridClasses} ${gridColClasses} px-4 md:px-0`}
      >
        {filteredImages.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 py-8">
            Nenhuma imagem encontrada nesta categoria.
          </p>
        ) : (
          filteredImages.map((imagem, index) => (
            <motion.div
              key={imagem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
              onClick={() => setImagemAtiva(imagem)}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-w-4 aspect-h-3 h-full">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium opacity-0 hover:opacity-100 truncate w-full transition-opacity duration-300">
                    {imagem.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Modal para visualização ampliada - com navegação */}
      <AnimatePresence>
        {imagemAtiva && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setImagemAtiva(null)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão fechar */}
              <button
                className="absolute top-2 right-2 z-50 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                onClick={() => setImagemAtiva(null)}
                aria-label="Fechar galeria"
              >
                <FaTimes size={20} />
              </button>

              {/* Navegação - botões laterais */}
              <div className="absolute inset-y-0 left-0 flex items-center z-40">
                <button
                  className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-r-lg transition-colors"
                  onClick={handlePrevImage}
                  aria-label="Imagem anterior"
                >
                  <FaChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center z-40">
                <button
                  className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-l-lg transition-colors"
                  onClick={handleNextImage}
                  aria-label="Próxima imagem"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>

              {/* Imagem */}
              <div className="relative max-h-[75vh] flex justify-center">
                <Image
                  src={imagemAtiva.src}
                  alt={imagemAtiva.alt}
                  width={imagemAtiva.width}
                  height={imagemAtiva.height}
                  className="object-contain max-h-[75vh] rounded-lg"
                  priority
                />
              </div>

              {/* Legenda */}
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-gray-800 font-medium">{imagemAtiva.alt}</h3>
                <p className="text-gray-600 text-sm">{imagemAtiva.category}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {currentIndex + 1} de {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 