
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
    <div className="grid grid-cols-3 gap-3 mb-4">
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
