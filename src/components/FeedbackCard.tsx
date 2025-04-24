
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
      className="cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{feedback.title}</h3>
            <p className="text-sm text-muted-foreground">
              By {feedback.author} · {formatDistance(new Date(feedback.createdAt), new Date(), { addSuffix: true })}
            </p>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <FeedbackCategoryBadge category={feedback.category} />
            <FeedbackStatusBadge status={feedback.status} />
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm line-clamp-3">{feedback.description}</p>
      </CardContent>
      
      <CardFooter className="pt-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={handleUpvote}
            >
              <ThumbsUp size={16} />
            </Button>
            <span className="font-medium">{feedback.votes}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
              onClick={handleDownvote}
            >
              <ThumbsDown size={16} />
            </Button>
          </div>
          
          <div className="flex items-center gap-1">
            <MessageSquare size={16} className="text-muted-foreground" />
            <span>{feedback.comments.length}</span>
          </div>
        </div>
        
        <div className="text-muted-foreground">
          Updated {formatDistance(new Date(feedback.updatedAt), new Date(), { addSuffix: true })}
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
