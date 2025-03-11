
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from '@/lib/data';
import { useCart } from '@/lib/useCart';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };
  
  return (
    <div className="flex py-6 border-b border-muted animate-fade-in">
      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden bg-secondary/30">
        <img 
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <Link to={`/products/${item.id}`} className="text-foreground font-medium hover:text-primary/80">
              {item.name}
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">Quantity: {item.quantity}</p>
          </div>
          <p className="text-foreground font-medium">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={handleDecrease}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-3 text-sm">{item.quantity}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={handleIncrease}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-destructive"
            onClick={handleRemove}
          >
            <X className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
