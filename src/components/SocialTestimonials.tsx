
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    author: "Sarah Chen",
    platform: "twitter",
    text: "Really impressed with how @LloydsBank handled my mortgage application. The team was super helpful! 🏠",
    role: "First-time homeowner"
  },
  {
    id: 2,
    author: "Marcus Thompson",
    platform: "linkedin",
    text: "Kudos to Lloyds Bank for their excellent business banking services. They've been instrumental in helping my startup grow.",
    role: "Startup Founder"
  },
  {
    id: 3,
    author: "Priya Patel",
    platform: "facebook",
    text: "The mobile banking app is so intuitive! Makes managing my finances a breeze. Thank you Lloyds! 📱",
    role: "Digital Banking User"
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'twitter':
      return <Twitter className="h-4 w-4 text-sky-500" />;
    case 'facebook':
      return <Facebook className="h-4 w-4 text-blue-600" />;
    case 'linkedin':
      return <Linkedin className="h-4 w-4 text-blue-700" />;
    default:
      return null;
  }
};

const SocialTestimonials = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">What people are saying in Socials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="rounded-lg border p-3 bg-muted/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  {getPlatformIcon(testimonial.platform)}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialTestimonials;
