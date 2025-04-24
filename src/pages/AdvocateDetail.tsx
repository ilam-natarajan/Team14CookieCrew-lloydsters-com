
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MOCK_ADVOCATE_DATA = {
  'jamal-washington': {
    name: "Jamal Washington",
    department: "Retail Banking",
    referralsCount: 5,
    feedbacks: [
      { id: 1, text: "We should consider extending branch hours on weekends.", date: "2025-03-15" },
      { id: 2, text: "The new mobile check deposit feature is working great!", date: "2025-04-01" }
    ],
    socialPosts: [
      { id: 1, platform: "LinkedIn", text: "Proud to help another small business get started with Lloyds Bank! #BusinessBanking", date: "2025-04-10" },
      { id: 2, platform: "Twitter", text: "Great team meeting today discussing ways to improve customer experience! @LloydsBank", date: "2025-04-15" }
    ]
  },
  'mei-chen': {
    name: "Mei Chen",
    department: "Mortgages",
    referralsCount: 8,
    feedbacks: [
      { id: 1, text: "The mortgage calculator tool needs some UI improvements.", date: "2025-03-20" },
      { id: 2, text: "Customers love the new first-time buyer program!", date: "2025-04-05" }
    ],
    socialPosts: [
      { id: 1, platform: "LinkedIn", text: "Helped another family secure their dream home today! #MortgageAdvice", date: "2025-04-12" }
    ]
  },
  'elena-rodriguez': {
    name: "Elena Rodriguez",
    department: "Business Banking",
    referralsCount: 3,
    feedbacks: [
      { id: 1, text: "Business online banking portal needs better export features.", date: "2025-04-01" }
    ],
    socialPosts: [
      { id: 1, platform: "LinkedIn", text: "Excited about our new small business initiatives! #BusinessGrowth", date: "2025-04-08" },
      { id: 2, platform: "Twitter", text: "Great workshop today with local entrepreneurs! #SmallBusiness", date: "2025-04-14" }
    ]
  }
};

const AdvocateDetail = () => {
  const { id } = useParams();
  const advocate = MOCK_ADVOCATE_DATA[id as keyof typeof MOCK_ADVOCATE_DATA];

  if (!advocate) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1>Advocate not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{advocate.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{advocate.department}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium">Total Referrals: {advocate.referralsCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Feedback Provided</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {advocate.feedbacks.map((feedback) => (
                  <div key={feedback.id} className="border rounded-lg p-3">
                    <p className="text-sm">{feedback.text}</p>
                    <p className="text-xs text-muted-foreground mt-2">{feedback.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Social Media Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {advocate.socialPosts.map((post) => (
                  <div key={post.id} className="border rounded-lg p-3">
                    <p className="text-xs font-medium text-primary mb-1">{post.platform}</p>
                    <p className="text-sm">{post.text}</p>
                    <p className="text-xs text-muted-foreground mt-2">{post.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdvocateDetail;
