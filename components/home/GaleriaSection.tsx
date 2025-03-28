import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";
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

  const filteredImages =
    categoriaAtiva === "Todas"
      ? galeriaImagens
      : galeriaImagens.filter((img) => img.category === categoriaAtiva);

  return (
    <section id="galeria" ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h2 className="font-lora text-3xl md:text-4xl text-primary mb-4">
          Galeria
        </h2>
        <p className="text-gray-700 mb-8">
          Conheça um pouco mais do Refúgio Haras através de nossas imagens. 
          Navegue pela galeria e descubra os encantos do nosso espaço.
        </p>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`px-4 py-2 rounded-full text-sm ${
                categoriaAtiva === categoria
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors`}
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid de imagens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {filteredImages.map((imagem, index) => (
          <motion.div
            key={imagem.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setImagemAtiva(imagem)}
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <Image
                src={imagem.src}
                alt={imagem.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal para visualização ampliada */}
      <AnimatePresence>
        {imagemAtiva && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setImagemAtiva(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
                onClick={() => setImagemAtiva(null)}
              >
                <FaTimes size={20} />
              </button>
              <div className="relative max-h-[80vh]">
                <Image
                  src={imagemAtiva.src}
                  alt={imagemAtiva.alt}
                  width={imagemAtiva.width}
                  height={imagemAtiva.height}
                  className="object-contain max-h-[80vh] rounded-lg"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="text-gray-800 font-medium">{imagemAtiva.alt}</p>
                <p className="text-gray-600 text-sm">{imagemAtiva.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 