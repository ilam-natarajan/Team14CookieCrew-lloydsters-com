
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FeedbackCategory } from '@/types/feedback';

interface FeedbackCategoryBadgeProps {
  category: FeedbackCategory;
}

const FeedbackCategoryBadge: React.FC<FeedbackCategoryBadgeProps> = ({ category }) => {
  const getCategoryStyles = () => {
    switch (category) {
      case 'ui':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'feature':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'bug':
        return 'bg-red-500 hover:bg-red-600';
      case 'improvement':
        return 'bg-green-500 hover:bg-green-600';
      case 'other':
        return 'bg-orange-500 hover:bg-orange-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case 'ui':
        return 'UI/UX';
      case 'feature':
        return 'Feature';
      case 'bug':
        return 'Bug';
      case 'improvement':
        return 'Improvement';
      case 'other':
        return 'Other';
      default:
        return category;
    }
  };

  return (
    <Badge className={`${getCategoryStyles()} capitalize`} variant="secondary">
      {getCategoryLabel()}
    </Badge>
  );
};

export default FeedbackCategoryBadge;
