
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFeedback } from '@/contexts/FeedbackContext';

interface HeaderProps {
  onOpenSubmitDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSubmitDialog }) => {
  const { searchTerm, setSearchTerm } = useFeedback();

  return (
    <header className="bg-primary py-6 px-4 md:px-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Feature Feedback Forum</h1>
            <p className="text-primary-foreground/80 mt-1">
              Share your ideas, vote on features, and help shape our product
            </p>
          </div>
          
          <Button 
            onClick={onOpenSubmitDialog}
            size="lg"
            variant="secondary"
            className="w-full md:w-auto"
          >
            Submit Feedback
          </Button>
        </div>

        <div className="mt-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="search"
            placeholder="Search feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-none text-white placeholder:text-white/60 focus-visible:ring-white/30"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
