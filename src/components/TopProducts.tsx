
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 'halifax-mortgage',
    name: "Halifax Mortgage",
    description: "Find the right mortgage for your home",
    tag: "Most Popular"
  },
  {
    id: 'club-saver',
    name: "Lloyds Club Saver",
    description: "Save more with our club saver account",
    tag: "High Interest"
  },
  {
    id: 'home-insurance',
    name: "Lloyds Home Insurance",
    description: "Protect your home and what matters most",
    tag: "Best Value"
  }
];

const TopProducts = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top products of this month</CardTitle>
          <Link 
            to="/products" 
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.description}</p>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                <span className="text-xs text-primary font-medium">{product.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopProducts;
