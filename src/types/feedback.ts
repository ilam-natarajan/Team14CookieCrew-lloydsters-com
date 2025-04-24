export type FeedbackStatus = 'new' | 'planned' | 'in-progress' | 'completed' | 'declined';

export type FeedbackCategory = 'ui' | 'feature' | 'bug' | 'improvement' | 'other' | 'colleague-offers';

export interface FeedbackComment {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
}

export interface Feedback {
  id: string;
  title: string;
  description: string;
  category: FeedbackCategory;
  status: FeedbackStatus;
  votes: number;
  author: string;
  comments: FeedbackComment[];
  createdAt: Date;
  updatedAt: Date;
}
