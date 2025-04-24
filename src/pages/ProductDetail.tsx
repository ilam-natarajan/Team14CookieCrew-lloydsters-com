
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Package, Building, CheckCircle2, XCircle } from 'lucide-react';

const PRODUCTS_DATA = {
  'halifax-mortgage': {
    name: "Halifax Mortgage",
    description: "Find the right mortgage for your home with our range of flexible mortgage options. We offer competitive rates and expert guidance throughout your mortgage journey.",
    features: ["Up to 40-year term", "Free property valuation", "Overpayment options", "First-time buyer support"],
    competitors: [
      { name: "Barclays", rate: "4.14%", fees: "£999", overpayment: true, onlineService: true },
      { name: "HSBC", rate: "4.24%", fees: "£1,499", overpayment: true, onlineService: true },
      { name: "Monzo", rate: "4.44%", fees: "£0", overpayment: false, onlineService: true }
    ]
  },
  'club-saver': {
    name: "Lloyds Club Saver",
    description: "An exclusive savings account that rewards you with a higher interest rate and lifestyle benefits. Perfect for those looking to build their savings while enjoying extra perks.",
    features: ["3.5% AER/Gross", "Monthly interest payments", "Free cinema tickets", "Retail discounts"],
    competitors: [
      { name: "Barclays", rate: "3.0%", fees: "£0", mobileApp: true, rewards: false },
      { name: "HSBC", rate: "3.2%", fees: "£0", mobileApp: true, rewards: true },
      { name: "Monzo", rate: "3.71%", fees: "£0", mobileApp: true, rewards: true }
    ]
  },
  'home-insurance': {
    name: "Lloyds Home Insurance",
    description: "Comprehensive home insurance that protects what matters most. Choose between buildings and contents insurance or combine both for complete peace of mind.",
    features: ["New for old replacement", "24/7 emergency helpline", "Alternative accommodation cover", "Accidental damage"],
    competitors: [
      { name: "Barclays", monthlyPrice: "£12", excess: "£100", emergencySupport: true, onlineClaim: true },
      { name: "HSBC", monthlyPrice: "£15", excess: "£50", emergencySupport: true, onlineClaim: true },
      { name: "Monzo", monthlyPrice: "N/A", excess: "N/A", emergencySupport: false, onlineClaim: false }
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? PRODUCTS_DATA[id as keyof typeof PRODUCTS_DATA] : null;

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  const renderComparisonTable = () => {
    const isInsurance = id === 'home-insurance';
    const isMortgage = id === 'halifax-mortgage';

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Provider</TableHead>
            <TableHead>{isMortgage ? 'Interest Rate' : isInsurance ? 'Monthly Price' : 'Interest Rate'}</TableHead>
            <TableHead>{isMortgage ? 'Fees' : isInsurance ? 'Excess' : 'Fees'}</TableHead>
            <TableHead>{isMortgage ? 'Overpayment' : isInsurance ? 'Emergency Support' : 'Mobile App'}</TableHead>
            <TableHead>{isMortgage ? 'Online Service' : isInsurance ? 'Online Claims' : 'Rewards'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {product.competitors.map((competitor) => (
            <TableRow key={competitor.name}>
              <TableCell>{competitor.name}</TableCell>
              <TableCell>
                {isMortgage ? competitor.rate : isInsurance ? competitor.monthlyPrice : competitor.rate}
              </TableCell>
              <TableCell>
                {isMortgage ? competitor.fees : isInsurance ? competitor.excess : competitor.fees}
              </TableCell>
              <TableCell>
                {isMortgage ? (
                  competitor.overpayment ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                ) : isInsurance ? (
                  competitor.emergencySupport ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                ) : (
                  competitor.mobileApp ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                {isMortgage ? (
                  competitor.onlineService ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                ) : isInsurance ? (
                  competitor.onlineClaim ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                ) : (
                  competitor.rewards ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">{product.description}</p>
            
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Compare with competitors</h3>
              {renderComparisonTable()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
