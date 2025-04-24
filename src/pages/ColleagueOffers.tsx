
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

const ColleagueOffers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Colleague Financial Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Valid Until</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_OFFERS.map((offer) => (
                  <TableRow key={offer.id}>
                    <TableCell className="font-medium">{offer.productName}</TableCell>
                    <TableCell>{offer.rate}</TableCell>
                    <TableCell>{offer.description}</TableCell>
                    <TableCell>{offer.validUntil}</TableCell>
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

export default ColleagueOffers;
