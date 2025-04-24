
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
      <div className="min-h-screen bg-gray-50">
        <Header onOpenSubmitDialog={() => setFeedbackFormOpen(true)} />
        
        <main className="container mx-auto px-4 py-8">
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
