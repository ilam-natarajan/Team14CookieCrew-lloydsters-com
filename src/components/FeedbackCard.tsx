
import React from 'react';
import { formatDistance } from 'date-fns';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import FeedbackStatusBadge from './FeedbackStatusBadge';
import FeedbackCategoryBadge from './FeedbackCategoryBadge';
import { Feedback } from '@/types/feedback';
import { useFeedback } from '@/contexts/FeedbackContext';

interface FeedbackCardProps {
  feedback: Feedback;
  onClick: () => void;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback, onClick }) => {
  const { upvoteFeedback, downvoteFeedback } = useFeedback();
  
  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    upvoteFeedback(feedback.id);
  };
  
  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    downvoteFeedback(feedback.id);
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-shadow active:bg-gray-50"
      onClick={onClick}
    >
      <CardHeader className="pb-2 p-3">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-semibold text-base">{feedback.title}</h3>
            <p className="text-xs text-muted-foreground">
              By {feedback.author} · {formatDistance(new Date(feedback.createdAt), new Date(), { addSuffix: true })}
            </p>
          </div>
          
          <div className="flex gap-1 flex-shrink-0">
            <FeedbackCategoryBadge category={feedback.category} />
            <FeedbackStatusBadge status={feedback.status} />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 pt-0">
        <p className="text-sm line-clamp-2">{feedback.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 p-3 flex items-center justify-between text-xs border-t">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 rounded-full"
              onClick={handleUpvote}
            >
              <ThumbsUp size={14} />
            </Button>
            <span className="font-medium">{feedback.votes}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 rounded-full"
              onClick={handleDownvote}
            >
              <ThumbsDown size={14} />
            </Button>
          </div>
          
          <div className="flex items-center gap-1">
            <MessageSquare size={14} className="text-muted-foreground" />
            <span>{feedback.comments.length}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
