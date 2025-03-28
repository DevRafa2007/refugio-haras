export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  features?: string[];
}

export interface Location {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  width: number;
  height: number;
} 