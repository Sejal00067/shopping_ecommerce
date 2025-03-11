
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedProducts />
      
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-widest text-foreground/70">
                Our Philosophy
              </span>
              <h2 className="text-3xl font-medium">Design that prioritizes both form and function</h2>
              <p className="text-muted-foreground">
                We believe that good design is simple, useful, and made to last. Our products are thoughtfully crafted with sustainable materials and timeless aesthetics that will enhance your everyday life.
              </p>
              <Button variant="outline" className="rounded-md mt-4 group">
                About Our Brand
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
                alt="Minimalist workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-border rounded-lg text-center space-y-4 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free shipping on all orders over $150.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-lg text-center space-y-4 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day return policy, hassle-free.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-lg text-center space-y-4 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
                Your data is protected with end-to-end encryption.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center space-y-8">
          <span className="text-sm uppercase tracking-widest text-primary-foreground/70">
            Join Our Community
          </span>
          <h2 className="text-3xl md:text-4xl font-medium max-w-md mx-auto">
            Subscribe to our newsletter
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Stay updated with our latest products, exclusive offers, and design inspiration.
          </p>
          <div className="max-w-md mx-auto flex items-center gap-4 pt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-4 rounded-md bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:ring-0"
            />
            <Button className="h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-md">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
