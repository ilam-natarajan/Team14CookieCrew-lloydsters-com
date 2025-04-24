import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Feedback, FeedbackCategory, FeedbackComment, FeedbackStatus } from '@/types/feedback';
import { mockFeedback } from '@/data/mockData';
import { toast } from '@/components/ui/use-toast';

interface FeedbackContextType {
  feedback: Feedback[];
  addFeedback: (newFeedback: Omit<Feedback, 'id' | 'votes' | 'comments' | 'createdAt' | 'updatedAt'>) => void;
  updateFeedback: (id: string, updatedFeedback: Partial<Feedback>) => void;
  deleteFeedback: (id: string) => void;
  addComment: (feedbackId: string, comment: Omit<FeedbackComment, 'id' | 'createdAt'>) => void;
  upvoteFeedback: (id: string) => void;
  downvoteFeedback: (id: string) => void;
  updateStatus: (id: string, status: FeedbackStatus) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedback, setFeedback] = useState<Feedback[]>(mockFeedback);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('most-votes');

  const addFeedback = (newFeedback: Omit<Feedback, 'id' | 'votes' | 'comments' | 'createdAt' | 'updatedAt'>) => {
    const feedbackWithId: Feedback = {
      ...newFeedback,
      id: Math.random().toString(36).substring(2, 9),
      votes: 0,
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setFeedback((prevFeedback) => [feedbackWithId, ...prevFeedback]);
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback!",
    });
  };

  const updateFeedback = (id: string, updatedFeedback: Partial<Feedback>) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((item) =>
        item.id === id
          ? { ...item, ...updatedFeedback, updatedAt: new Date() }
          : item
      )
    );
  };

  const deleteFeedback = (id: string) => {
    setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
    toast({
      title: "Feedback deleted",
      description: "The feedback has been removed",
      variant: "destructive",
    });
  };

  const addComment = (feedbackId: string, comment: Omit<FeedbackComment, 'id' | 'createdAt'>) => {
    const commentWithId: FeedbackComment = {
      ...comment,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date(),
    };

    setFeedback((prevFeedback) =>
      prevFeedback.map((item) =>
        item.id === feedbackId
          ? {
              ...item,
              comments: [...item.comments, commentWithId],
              updatedAt: new Date(),
            }
          : item
      )
    );
    toast({
      title: "Comment added",
      description: "Your comment has been added to the discussion",
    });
  };

  const upvoteFeedback = (id: string) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((item) =>
        item.id === id
          ? { ...item, votes: item.votes + 1, updatedAt: new Date() }
          : item
      )
    );
  };

  const downvoteFeedback = (id: string) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((item) =>
        item.id === id && item.votes > 0
          ? { ...item, votes: item.votes - 1, updatedAt: new Date() }
          : item
      )
    );
  };

  const updateStatus = (id: string, status: FeedbackStatus) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((item) =>
        item.id === id
          ? { ...item, status, updatedAt: new Date() }
          : item
      )
    );
    toast({
      title: "Status updated",
      description: `Feedback has been marked as ${status}`,
    });
  };

  const value = {
    feedback,
    addFeedback,
    updateFeedback,
    deleteFeedback,
    addComment,
    upvoteFeedback,
    downvoteFeedback,
    updateStatus,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    sortOption,
    setSortOption,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};
