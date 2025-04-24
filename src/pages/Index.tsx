
import React, { useState } from 'react';
import Header from '@/components/Header';
import FeedbackStats from '@/components/FeedbackStats';
import { FeedbackProvider } from '@/contexts/FeedbackContext';
import FeedbackForm from '@/components/FeedbackForm';

const Index = () => {
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);

  const handleOpenSubmitDialog = () => {
    setFeedbackFormOpen(true);
  };

  return (
    <FeedbackProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onOpenSubmitDialog={handleOpenSubmitDialog} />
        <main className="flex-1 px-3 py-4 md:px-6 md:py-6 max-w-4xl mx-auto w-full">
          <FeedbackStats />
        </main>
        
        <FeedbackForm 
          open={feedbackFormOpen} 
          onOpenChange={setFeedbackFormOpen} 
        />
      </div>
    </FeedbackProvider>
  );
};

export default Index;
