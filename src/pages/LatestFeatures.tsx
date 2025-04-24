
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-[#9b87f5]">Latest Features</h1>
      <div className="grid gap-4">
        {LATEST_FEATURES.map((feature) => (
          <Card key={feature.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                <span className="text-sm px-2 py-1 bg-[#E5DEFF] text-[#6E59A5] rounded-full">
                  {feature.platform}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <p className="text-sm text-gray-500">
                Released: {new Date(feature.releaseDate).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestFeatures;
