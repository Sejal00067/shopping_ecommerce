
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl space-y-6">
          <span className={`inline-block text-sm uppercase tracking-widest text-foreground/70 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Curated Minimalism
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Thoughtfully designed objects for everyday living
          </h1>
          <p className={`text-lg text-foreground/70 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Explore our collection of meticulously crafted products that combine form and function in perfect harmony.
          </p>
          <div className={`pt-4 transition-all duration-500 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Button asChild className="rounded-md group">
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1440&auto=format&fit=crop" 
          alt="Minimalist interior" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
