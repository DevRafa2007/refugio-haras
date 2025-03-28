import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ReservasSection from "@/components/home/ReservasSection";
import LocalizacaoSection from "@/components/home/LocalizacaoSection";
import DescobertasSection from "@/components/home/DescobertasSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className="container-custom">
        <ReservasSection />
        <LocalizacaoSection />
        <DescobertasSection />
      </div>
    </Layout>
  );
} 