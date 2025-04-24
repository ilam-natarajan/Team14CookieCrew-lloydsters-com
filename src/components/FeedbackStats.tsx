
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeedback } from '@/contexts/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useFeedback();
  const colleagueOfferCount = 3; // Using a fixed number as per the mock data

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Link to="/colleague-offers" className="block">
        <Card className="transition-transform active:scale-95 shadow-sm h-full">
          <CardHeader className="py-1.5 px-3">
            <CardTitle className="text-xs font-medium text-muted-foreground">Offers</CardTitle>
          </CardHeader>
          <CardContent className="py-1.5 px-3 flex items-center justify-center">
            <p className="text-xl font-bold">{colleagueOfferCount}</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/latest-features" className="block">
        <Card className="transition-transform active:scale-95 shadow-sm h-full">
          <CardHeader className="py-1.5 px-3">
            <CardTitle className="text-xs font-medium text-[#9b87f5]">Latest</CardTitle>
          </CardHeader>
          <CardContent className="py-1.5 px-3 flex items-center justify-center">
            <p className="text-xl font-bold">Features</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/feedbacks" className="block">
        <Card className="transition-transform active:scale-95 shadow-sm h-full">
          <CardHeader className="py-1.5 px-3">
            <CardTitle className="text-xs font-medium text-[#9b87f5]">Feedback</CardTitle>
          </CardHeader>
          <CardContent className="py-1.5 px-3 flex items-center justify-center">
            <p className="text-xl font-bold">{feedback.length}</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/referral-stars" className="block">
        <Card className="transition-transform active:scale-95 shadow-sm h-full">
          <CardHeader className="py-1.5 px-3">
            <CardTitle className="text-xs font-medium text-muted-foreground">Stars</CardTitle>
          </CardHeader>
          <CardContent className="py-1.5 px-3 flex items-center justify-center">
            <img
              src="/lloyds-horse-logo.png"
              alt="Referrals"
              className="w-7 h-7 object-cover"
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default FeedbackStats;
