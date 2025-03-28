import { NavItem, SocialLink } from "../types";

export const SITE_NAME = "Refúgio Haras";
export const SITE_DESCRIPTION = "Descubra a paz e a tranquilidade no Refúgio Haras, localizado na Serra da Raiz - PB.";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Acomodações",
    href: "/#acomodacoes",
  },
  {
    title: "Galeria",
    href: "/#galeria",
  },
  {
    title: "Localização",
    href: "/#localizacao",
  },
  {
    title: "Reservas",
    href: "/#reservas",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/refugioharas",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/refugioharas",
    icon: "facebook",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5583999999999", // Placeholder - substituir pelo número correto
    icon: "whatsapp",
  },
];

export const CONTACT_INFO = {
  phone: "+55 83 99999-9999", // Placeholder - substituir pelo número correto
  email: "contato@refugioharas.com", // Placeholder - substituir pelo email correto
  location: {
    address: "Estrada Serra da Raiz",
    city: "Serra da Raiz",
    state: "PB",
    postalCode: "58000-000", // Placeholder - substituir pelo CEP correto
    coordinates: {
      lat: -6.685, // Placeholder - substituir pelas coordenadas corretas
      lng: -35.441, // Placeholder - substituir pelas coordenadas corretas
    },
  },
}; 