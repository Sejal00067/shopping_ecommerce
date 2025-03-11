import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';
import { type Product } from '@/lib/data';
import { useCart } from '@/lib/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast("Added to cart", {
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="overflow-hidden aspect-square bg-secondary/30 rounded-lg relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-105' : 'scale-100'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className={`absolute inset-0 bg-secondary/30 backdrop-blur-xl ${isImageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              variant="default"
              className="w-full rounded-md font-medium"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-1 text-left px-1">
          <h3 className="font-medium text-foreground tracking-tight">{product.name}</h3>
          <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
