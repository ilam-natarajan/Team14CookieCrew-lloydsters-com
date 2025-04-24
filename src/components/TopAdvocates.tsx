
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const MOCK_REFERRALS = [
  {
    id: 1,
    name: "Jamal Washington",
    department: "Retail Banking",
    referralsCount: 5
  },
  {
    id: 2,
    name: "Mei Chen",
    department: "Mortgages",
    referralsCount: 8
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    department: "Business Banking",
    referralsCount: 3
  }
];

const TopAdvocates = () => {
  const topReferrals = [...MOCK_REFERRALS]
    .sort((a, b) => b.referralsCount - a.referralsCount)
    .slice(0, 3);

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top advocates of this month</CardTitle>
          <Link 
            to="/referral-stars" 
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topReferrals.map((referral, index) => (
            <div key={referral.id} className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className={index === 0 ? "bg-amber-100 text-amber-600" : ""}>
                  {referral.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{referral.name}</p>
                <p className="text-xs text-muted-foreground">{referral.department}</p>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                <span className="font-medium text-amber-600 text-sm">{referral.referralsCount}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopAdvocates;

