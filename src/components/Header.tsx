
import React from 'react';
import { Speaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onOpenSubmitDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSubmitDialog }) => {
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
          <Button 
            onClick={onOpenSubmitDialog}
            size="sm"
            variant="secondary"
            className="h-9 whitespace-nowrap"
          >
            Feedback
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
