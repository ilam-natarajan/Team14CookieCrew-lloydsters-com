
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeedback } from '@/contexts/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useFeedback();
  
  // Calculate statistics
  const colleagueOfferCount = feedback.filter(item => item.category === 'colleague-offers').length;
  const referralStarsCount = feedback.filter(item => item.category === 'referral-stars').length;

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">Colleague Offers</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{colleagueOfferCount}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">Referral Stars</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{referralStarsCount}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackStats;
