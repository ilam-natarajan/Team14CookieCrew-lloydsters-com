
import React, { useMemo } from 'react';
import FeedbackCard from './FeedbackCard';
import { useFeedback } from '@/contexts/FeedbackContext';
import { Feedback } from '@/types/feedback';

interface FeedbackListProps {
  onFeedbackClick: (feedback: Feedback) => void;
  searchTerm: string;
}

const FeedbackList: React.FC<FeedbackListProps> = ({ onFeedbackClick, searchTerm }) => {
  const { 
    feedback, 
    selectedCategory, 
    selectedStatus, 
    sortOption,
  } = useFeedback();

  const filteredFeedback = useMemo(() => {
    let result = [...feedback];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    // Filter by status
    if (selectedStatus !== 'all') {
      result = result.filter(item => item.status === selectedStatus);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        item => 
          item.title.toLowerCase().includes(lowerSearchTerm) || 
          item.description.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    // Sort the results
    return result.sort((a, b) => {
      switch (sortOption) {
        case 'most-votes':
          return b.votes - a.votes;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        default:
          return b.votes - a.votes;
      }
    });
  }, [feedback, selectedCategory, selectedStatus, sortOption, searchTerm]);

  if (filteredFeedback.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">No feedback found</h3>
        <p className="text-muted-foreground">
          {searchTerm ? 'Try a different search term' : 'Try selecting a different category or status'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {filteredFeedback.map((item) => (
        <FeedbackCard 
          key={item.id} 
          feedback={item} 
          onClick={() => onFeedbackClick(item)} 
        />
      ))}
    </div>
  );
};

export default FeedbackList;
