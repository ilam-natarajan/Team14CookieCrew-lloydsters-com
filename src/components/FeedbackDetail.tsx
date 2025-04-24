
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
        author: 'Current User', // In a real app, this would come from auth
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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FeedbackCategoryBadge category={feedback.category} />
              <FeedbackStatusBadge status={feedback.status} />
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary"
                onClick={() => upvoteFeedback(feedback.id)}
              >
                <ThumbsUp size={16} />
              </Button>
              <span className="font-medium">{feedback.votes}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
                onClick={() => downvoteFeedback(feedback.id)}
              >
                <ThumbsDown size={16} />
              </Button>
            </div>
          </div>
          
          <DialogTitle className="text-xl mt-2">{feedback.title}</DialogTitle>
          <DialogDescription className="text-sm">
            By {feedback.author} · {formatDistance(new Date(feedback.createdAt), new Date(), { addSuffix: true })}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-foreground">{feedback.description}</p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-primary" />
            <h3 className="font-semibold text-lg">
              Comments ({feedback.comments.length})
            </h3>
          </div>
          
          <div className="space-y-6">
            {feedback.comments.length > 0 ? (
              feedback.comments.map(comment => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {getInitials(comment.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{comment.author}</h4>
                      <span className="text-xs text-muted-foreground">
                        {formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="mt-1 text-sm">{comment.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No comments yet. Be the first to add one!
              </p>
            )}
          </div>
          
          <div className="pt-4">
            <h4 className="font-medium mb-2">Add a comment</h4>
            <Textarea
              placeholder="Share your thoughts..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mb-2"
            />
            <Button 
              onClick={handleAddComment}
              disabled={comment.trim().length === 0}
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
