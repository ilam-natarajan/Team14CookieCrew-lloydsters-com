
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [contact, setContact] = useState('');
  const sortedReferrals = [...MOCK_REFERRALS].sort((a, b) => b.referralsCount - a.referralsCount);

  const handleReferral = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Backend Integration Required",
      description: "Please connect to Supabase to enable email sending functionality.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-[#00b368] text-white p-4 sticky top-0 z-10 shadow-md">
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
          {sortedReferrals.map((referral, index) => (
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

        <div className="mt-8 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Send className="h-4 w-4" />
                Refer your family and friends
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send a Referral Invitation</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleReferral} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="contact">Email or Phone Number</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="Enter email or phone number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Referral
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ReferralStars;
