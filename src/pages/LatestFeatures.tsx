
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LATEST_FEATURES = [
  {
    id: 1,
    title: "Statement Export in CSV",
    platform: "Desktop Banking",
    description: "Export your statements in CSV format for easier financial tracking",
    releaseDate: "2025-04-20"
  },
  {
    id: 2,
    title: "Face ID Login",
    platform: "Mobile App",
    description: "Now you can log in securely using Face ID on supported devices",
    releaseDate: "2025-04-15"
  },
  {
    id: 3,
    title: "Spending Insights",
    platform: "Both",
    description: "Get detailed insights about your spending habits with interactive charts",
    releaseDate: "2025-04-10"
  }
];

const LatestFeatures = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-[#00b368] text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center gap-2">
          <Link to="/" className="p-1.5">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-lg font-bold">Latest Features</h1>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-3 pt-4">
        <div className="space-y-3">
          {LATEST_FEATURES.map((feature) => (
            <Card key={feature.id} className="shadow-sm">
              <CardHeader className="p-3 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
                  <span className="text-xs px-2 py-0.5 bg-[#E5DEFF] text-[#6E59A5] rounded-full">
                    {feature.platform}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-sm text-gray-600 mb-1.5">{feature.description}</p>
                <p className="text-xs text-gray-500">
                  Released: {new Date(feature.releaseDate).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestFeatures;
