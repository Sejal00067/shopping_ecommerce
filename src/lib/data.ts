
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    price: 129.99,
    description: "Elegantly crafted desk lamp with adjustable brightness and color temperature. The perfect addition to any workspace.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    category: "lighting",
    featured: true
  },
  {
    id: "2",
    name: "Premium Wireless Headphones",
    price: 249.99,
    description: "Experience exceptional sound quality with these premium wireless headphones. Features active noise cancellation and 30+ hours of battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "audio",
    featured: true
  },
  {
    id: "3",
    name: "Artisan Ceramic Mug",
    price: 34.99,
    description: "Handcrafted ceramic mug designed with simplicity and functionality in mind. Each piece is unique with subtle variations in glaze.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop",
    category: "home",
    featured: false
  },
  {
    id: "4",
    name: "Smart Home Speaker",
    price: 199.99,
    description: "Intelligent speaker with premium sound quality and integrated voice assistant. Sleek design complements any interior style.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop",
    category: "audio",
    featured: true
  },
  {
    id: "5",
    name: "Minimalist Wall Clock",
    price: 89.99,
    description: "Clean, contemporary wall clock that makes a statement with its simplicity. Silent movement ensures a peaceful environment.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1000&auto=format&fit=crop",
    category: "home",
    featured: false
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    price: 59.99,
    description: "Streamlined wireless charging solution compatible with all Qi-enabled devices. Eliminates cable clutter while delivering fast charging.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
    category: "electronics",
    featured: false
  },
  {
    id: "7",
    name: "Premium Notebook",
    price: 24.99,
    description: "Thoughtfully designed notebook with premium paper quality. Perfect for sketches, notes, and creative ideas.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1000&auto=format&fit=crop",
    category: "stationery",
    featured: false
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    price: 349.99,
    description: "Meticulously designed chair providing superior comfort and support for extended periods of sitting. Adjustable in multiple dimensions.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop",
    category: "furniture",
    featured: true
  },
  {
    id: "9",
    name: "Handcrafted Wooden Vase",
    price: 79.99,
    description: "Unique wooden vase hand-carved by skilled artisans. Each piece showcases the natural beauty of the wood grain.",
    image: "https://images.unsplash.com/photo-1612196808214-b7e239e5d3c8?q=80&w=1000&auto=format&fit=crop",
    category: "home",
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "lighting", name: "Lighting" },
  { id: "audio", name: "Audio" },
  { id: "home", name: "Home Goods" },
  { id: "electronics", name: "Electronics" },
  { id: "stationery", name: "Stationery" },
  { id: "furniture", name: "Furniture" }
];
