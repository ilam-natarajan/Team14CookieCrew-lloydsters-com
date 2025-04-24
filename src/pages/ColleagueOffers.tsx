
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-[#00b368] text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center gap-2">
          <Link to="/" className="p-1.5">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-lg font-bold">Colleague Offers</h1>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-3 pt-4">
        <div className="space-y-3">
          {MOCK_OFFERS.map((offer) => (
            <Card key={offer.id} className="shadow-sm">
              <CardHeader className="p-3 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-semibold">{offer.productName}</CardTitle>
                  <span className="text-lg font-bold text-[#00b368]">{offer.rate}</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-sm text-gray-600 mb-1.5">{offer.description}</p>
                <p className="text-xs text-gray-500">
                  Valid until: {offer.validUntil}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColleagueOffers;
