
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CartItem from '@/components/CartItem';
import { useCart } from '@/lib/useCart';

const Cart: React.FC = () => {
  const { items, clearCart, getTotal } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  
  const subtotal = getTotal();
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 10;
  const total = subtotal + shipping;
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-6 py-16">
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-foreground/70">
                <ShoppingCart className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-2xl font-medium">Your cart is empty</h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild className="mt-4">
              <Link to="/products">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-2xl font-medium mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div 
              className={`transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button 
                variant="ghost" 
                asChild
              >
                <Link to="/products">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Continue Shopping
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-500 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="border border-border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 rounded-md">
                Proceed to Checkout
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
