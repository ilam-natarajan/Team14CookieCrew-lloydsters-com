import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import FeedbackFilters from '@/components/FeedbackFilters';
import FeedbackList from '@/components/FeedbackList';
import FeedbackDetail from '@/components/FeedbackDetail';
import FeedbackForm from '@/components/FeedbackForm';
import { FeedbackProvider } from '@/contexts/FeedbackContext';
import { Feedback } from '@/types/feedback';

const Feedbacks = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [feedbackDetailOpen, setFeedbackDetailOpen] = useState(false);
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFeedbackClick = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setFeedbackDetailOpen(true);
  };

  return (
    <FeedbackProvider>
      <div className="min-h-screen bg-gray-50 pb-6">
        <div className="bg-[#00b368] text-white p-4 sticky top-0 z-10 shadow-md">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2">
              <Link to="/" className="p-1.5">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-lg font-bold">Feedback Forum</h1>
              <div className="flex-1" />
              <button
                onClick={() => setFeedbackFormOpen(true)}
                className="text-sm bg-white/20 px-3 py-1.5 rounded-full font-medium hover:bg-white/30 transition-colors"
              >
                Submit
              </button>
            </div>
            
            <div className="mt-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
                <Input
                  type="search"
                  placeholder="Search feedback..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-white/10 border-white/20 text-white text-sm h-9 placeholder:text-white/60 focus-visible:ring-white/30"
                />
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto max-w-4xl px-3 pt-4">
          <FeedbackFilters />
          <FeedbackList onFeedbackClick={handleFeedbackClick} searchTerm={searchTerm} />
        </main>

        <FeedbackDetail 
          feedback={selectedFeedback} 
          open={feedbackDetailOpen} 
          onOpenChange={setFeedbackDetailOpen} 
        />
        
        <FeedbackForm 
          open={feedbackFormOpen} 
          onOpenChange={setFeedbackFormOpen} 
        />
      </div>
    </FeedbackProvider>
  );
};

export default Feedbacks;
