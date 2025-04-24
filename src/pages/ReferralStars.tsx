
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_REFERRALS = [
  {
    id: 1,
    name: "John Smith",
    department: "Retail Banking",
    referralsCount: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    department: "Mortgages",
    referralsCount: 8
  },
  {
    id: 3,
    name: "Mike Williams",
    department: "Business Banking",
    referralsCount: 3
  }
];

const ReferralStars = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-amber-500 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center gap-2">
          <Link to="/" className="p-1.5">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-lg font-bold flex items-center gap-2">
            Referral Stars
            <Star className="h-5 w-5 text-yellow-300" fill="currentColor" />
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-3 pt-4">
        <div className="space-y-3">
          {MOCK_REFERRALS.map((referral, index) => (
            <Card key={referral.id} className={`shadow-sm ${index === 0 ? 'border-amber-400 border-2' : ''}`}>
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{referral.name}</h3>
                    <p className="text-xs text-gray-500">{referral.department}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                    <Star size={16} className="text-amber-500" fill="currentColor" />
                    <span className="font-semibold">{referral.referralsCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralStars;
