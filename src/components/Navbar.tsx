
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/lib/useCart';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="text-xl font-semibold tracking-tight">
            MINIMA
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`link-underline text-sm uppercase tracking-wide ${
              location.pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`link-underline text-sm uppercase tracking-wide ${
              location.pathname.includes('/products') ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className={`link-underline text-sm uppercase tracking-wide ${
              location.pathname === '/about' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="container p-6 flex flex-col space-y-6">
          <div className="flex justify-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-6 pt-8">
            <Link 
              to="/" 
              className={`text-lg ${
                location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground/80'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-lg ${
                location.pathname.includes('/products') ? 'text-primary font-medium' : 'text-foreground/80'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-lg ${
                location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground/80'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
