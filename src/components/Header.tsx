
import React from 'react';
import { Search, Speaker, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFeedback } from '@/contexts/FeedbackContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onOpenSubmitDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSubmitDialog }) => {
  const { searchTerm, setSearchTerm } = useFeedback();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-10 bg-[#00b368] py-4 px-3 md:px-6 text-white shadow-md">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img 
              src="/lloyds-horse-logo.png" 
              alt="Lloyds Bank Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                Lloydsters! Let's build together <Speaker size={isMobile ? 18 : 24} />
              </h1>
            </div>
          </div>
        </div>
        
        <div className="mt-3 md:mt-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
            <Input
              type="search"
              placeholder="Search feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white/10 border-white/20 text-white text-sm h-9 placeholder:text-white/60 focus-visible:ring-white/30"
            />
          </div>
          <Button 
            onClick={onOpenSubmitDialog}
            size="sm"
            variant="secondary"
            className="h-9 whitespace-nowrap"
          >
            Submit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
