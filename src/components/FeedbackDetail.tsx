
import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import FeedbackStatusBadge from './FeedbackStatusBadge';
import FeedbackCategoryBadge from './FeedbackCategoryBadge';
import { Feedback } from '@/types/feedback';
import { useFeedback } from '@/contexts/FeedbackContext';

interface FeedbackDetailProps {
  feedback: Feedback | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeedbackDetail: React.FC<FeedbackDetailProps> = ({ feedback, open, onOpenChange }) => {
  const { upvoteFeedback, downvoteFeedback, addComment } = useFeedback();
  const [comment, setComment] = useState('');
  
  if (!feedback) return null;

  const handleAddComment = () => {
    if (comment.trim()) {
      addComment(feedback.id, {
        author: 'Current User',
        content: comment.trim()
      });
      setComment('');
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-4">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <FeedbackCategoryBadge category={feedback.category} />
              <FeedbackStatusBadge status={feedback.status} />
            </div>
            
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full"
                onClick={() => upvoteFeedback(feedback.id)}
              >
                <ThumbsUp size={14} />
              </Button>
              <span className="font-medium text-sm">{feedback.votes}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full"
                onClick={() => downvoteFeedback(feedback.id)}
              >
                <ThumbsDown size={14} />
              </Button>
            </div>
          </div>
          
          <DialogTitle className="text-base mt-2 text-left">{feedback.title}</DialogTitle>
          <DialogDescription className="text-xs">
            By {feedback.author} · {formatDistance(new Date(feedback.createdAt), new Date(), { addSuffix: true })}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-3">
          <p className="text-sm text-foreground">{feedback.description}</p>
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-primary" />
            <h3 className="font-semibold text-base">
              Comments ({feedback.comments.length})
            </h3>
          </div>
          
          <div className="space-y-4">
            {feedback.comments.length > 0 ? (
              feedback.comments.map(comment => (
                <div key={comment.id} className="flex gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {getInitials(comment.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-sm">{comment.author}</h4>
                      <span className="text-[10px] text-muted-foreground">
                        {formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs">{comment.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xs text-muted-foreground py-3">
                No comments yet. Be the first to add one!
              </p>
            )}
          </div>
          
          <div className="pt-2">
            <h4 className="font-medium text-sm mb-1.5">Add a comment</h4>
            <Textarea
              placeholder="Share your thoughts..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mb-2 text-sm min-h-[80px]"
            />
            <Button 
              onClick={handleAddComment}
              disabled={comment.trim().length === 0}
              size="sm"
              className="w-full"
            >
              Submit Comment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDetail;
