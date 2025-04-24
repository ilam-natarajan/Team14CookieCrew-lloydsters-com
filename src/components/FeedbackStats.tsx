
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeedback } from '@/contexts/FeedbackContext';

const MOCK_OFFERS = [
  {
    id: 1,
    productName: "Staff Mortgage",
    rate: "4.5%",
    description: "Special mortgage rates for Lloyds Bank colleagues",
    validUntil: "2025-12-31"
  },
  {
    id: 2,
    productName: "Staff Savings Account",
    rate: "5.0%",
    description: "Enhanced savings rate for bank employees",
    validUntil: "2025-12-31"
  },
  {
    id: 3,
    productName: "Personal Loan",
    rate: "6.5%",
    description: "Discounted personal loan rates for staff",
    validUntil: "2025-12-31"
  }
];

const FeedbackStats = () => {
  const { feedback } = useFeedback();
  const colleagueOfferCount = MOCK_OFFERS.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Link to="/colleague-offers">
        <Card className="transition-transform hover:scale-105">
          <CardHeader className="py-2 px-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">Colleague Offers</CardTitle>
          </CardHeader>
          <CardContent className="py-2 px-4">
            <p className="text-2xl font-bold">{colleagueOfferCount}</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/latest-features">
        <Card className="transition-transform hover:scale-105">
          <CardHeader className="py-2 px-4">
            <CardTitle className="text-sm font-medium text-[#9b87f5]">Latest Features</CardTitle>
          </CardHeader>
          <CardContent className="py-2 px-4 flex items-center justify-center min-h-[88px]">
            <span className="text-sm text-muted-foreground">View Latest Features</span>
          </CardContent>
        </Card>
      </Link>

      <Link to="/referral-stars">
        <Card className="transition-transform hover:scale-105">
          <CardHeader className="py-2 px-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">Referral Stars</CardTitle>
          </CardHeader>
          <CardContent className="py-2 px-4">
            <div className="flex items-center justify-center">
              <img
                src="/lloyds-horse-logo.png"
                alt="Referrals"
                className="w-8 h-8 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default FeedbackStats;
