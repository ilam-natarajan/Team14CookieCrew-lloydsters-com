
import React from 'react';
import { Search, Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFeedback } from '@/contexts/FeedbackContext';

interface HeaderProps {
  onOpenSubmitDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSubmitDialog }) => {
  const { searchTerm, setSearchTerm } = useFeedback();

  return (
    <header className="bg-[#00b368] py-6 px-4 md:px-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <img 
              src="/lloyds-horse-logo.png" 
              alt="Lloyds Bank Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                Lloydsters! Let's build our products together! Share your thoughts <Mic size={24} />
              </h1>
              <p className="text-white/80 mt-1">
                Share your ideas, vote on features, and help shape our product
              </p>
            </div>
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
          <Input
            type="search"
            placeholder="Search feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

