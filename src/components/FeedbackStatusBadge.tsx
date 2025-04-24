
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FeedbackStatus } from '@/types/feedback';

interface FeedbackStatusBadgeProps {
  status: FeedbackStatus;
}

const FeedbackStatusBadge: React.FC<FeedbackStatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'new':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'planned':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'in-progress':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'completed':
        return 'bg-green-500 hover:bg-green-600';
      case 'declined':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'new':
        return 'New';
      case 'planned':
        return 'Planned';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'declined':
        return 'Declined';
      default:
        return status;
    }
  };

  return (
    <Badge className={`${getStatusStyles()} capitalize`} variant="secondary">
      {getStatusLabel()}
    </Badge>
  );
};

export default FeedbackStatusBadge;
