
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useFeedback } from '@/contexts/FeedbackContext';
import { FeedbackCategory, FeedbackStatus } from '@/types/feedback';
import { categories } from '@/data/mockData';

interface FeedbackFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ open, onOpenChange }) => {
  const { addFeedback } = useFeedback();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<FeedbackCategory>('feature');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() && description.trim()) {
      addFeedback({
        title: title.trim(),
        description: description.trim(),
        category,
        status: 'new' as FeedbackStatus,
        author: 'Current User', // In a real app, this would come from auth
      });
      
      // Reset form and close dialog
      setTitle('');
      setDescription('');
      setCategory('feature');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-4">
        <DialogHeader>
          <DialogTitle className="text-base">Submit New Feedback</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="title" className="text-sm">Title</Label>
            <Input
              id="title"
              placeholder="Brief summary of your feedback"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="h-9 text-sm"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="description" className="text-sm">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about your feedback or suggestion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
              className="text-sm"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="category" className="text-sm">Category</Label>
            <Select 
              value={category} 
              onValueChange={(value) => setCategory(value as FeedbackCategory)}
            >
              <SelectTrigger id="category" className="h-9 text-sm">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.filter(cat => cat.id !== 'all').map((cat) => (
                  <SelectItem key={cat.id} value={cat.id} className="text-sm">
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter className="pt-2">
            <div className="flex w-full gap-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} size="sm" className="flex-1">
                Cancel
              </Button>
              <Button type="submit" size="sm" className="flex-1">Submit</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;
