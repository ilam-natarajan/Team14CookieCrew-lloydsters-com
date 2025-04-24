
import React from 'react';
import Header from '@/components/Header';
import FeedbackStats from '@/components/FeedbackStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 px-3 py-4 md:px-6 md:py-6 max-w-4xl mx-auto w-full">
        <FeedbackStats />
      </main>
    </div>
  );
};

export default Index;
