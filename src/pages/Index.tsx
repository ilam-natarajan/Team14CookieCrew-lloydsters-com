
import React, { useState } from 'react';
import Header from '@/components/Header';
import FeedbackFilters from '@/components/FeedbackFilters';
import FeedbackList from '@/components/FeedbackList';
import FeedbackDetail from '@/components/FeedbackDetail';
import FeedbackForm from '@/components/FeedbackForm';
import FeedbackStats from '@/components/FeedbackStats';
import { FeedbackProvider } from '@/contexts/FeedbackContext';
import { Feedback } from '@/types/feedback';

const Index = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [feedbackDetailOpen, setFeedbackDetailOpen] = useState(false);
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);

  const handleFeedbackClick = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setFeedbackDetailOpen(true);
  };

  return (
    <FeedbackProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onOpenSubmitDialog={() => setFeedbackFormOpen(true)} />
        
        <main className="flex-1 px-3 py-4 md:px-6 md:py-6 max-w-4xl mx-auto w-full">
          <FeedbackStats />
          <FeedbackFilters />
          <FeedbackList onFeedbackClick={handleFeedbackClick} />
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

export default Index;
