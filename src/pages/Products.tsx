
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleCategoryChange = (value: string) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterProducts(categoryParam, searchQuery);
  };
  
  const filterProducts = (category: string, query: string) => {
    let filtered = products;
    
    if (category && category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (query.trim()) {
      const lowercasedQuery = query.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(lowercasedQuery) ||
          product.description.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    setFilteredProducts(filtered);
  };
  
  useEffect(() => {
    filterProducts(categoryParam, searchQuery);
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, [categoryParam]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12 pt-8">
          <span className="text-sm uppercase tracking-widest text-foreground/70">
            Our Collection
          </span>
          <h1 className="text-3xl md:text-4xl font-medium">Shop All Products</h1>
          <p className="text-muted-foreground">
            Browse our curated collection of minimalist products for modern living.
          </p>
        </div>
        
        <div className="flex flex-col space-y-8 mb-12">
          <Tabs 
            defaultValue={categoryParam} 
            onValueChange={handleCategoryChange}
            className="w-full max-w-2xl mx-auto"
          >
            <TabsList className="w-full justify-start overflow-x-auto py-2 px-0 bg-transparent h-auto mb-4">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-full border border-border bg-background px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-md h-12"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
