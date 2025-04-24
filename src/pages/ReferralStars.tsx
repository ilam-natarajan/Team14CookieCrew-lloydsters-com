import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-400" />
              Colleague Referral Stars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Colleague Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Number of Referrals</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_REFERRALS.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell className="font-medium">{referral.name}</TableCell>
                    <TableCell>{referral.department}</TableCell>
                    <TableCell>{referral.referralsCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReferralStars;
