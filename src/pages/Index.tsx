
import React, { useState } from 'react';
import Header from '@/components/Header';
import FeedbackStats from '@/components/FeedbackStats';
import { FeedbackProvider } from '@/contexts/FeedbackContext';
import FeedbackForm from '@/components/FeedbackForm';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { GooglePay } from 'lucide-react';

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
          <Alert className="mb-4 border-[#00b368]/20 bg-[#00b368]/10">
            <GooglePay className="h-5 w-5 text-[#00b368]" />
            <AlertTitle className="text-[#00b368] font-medium">New Feature Available!</AlertTitle>
            <AlertDescription className="text-[#00b368]/90">
              You can now instantly add your debit cards to Google Pay
            </AlertDescription>
          </Alert>
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
