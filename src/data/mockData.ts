
import { Feedback, FeedbackCategory, FeedbackStatus } from '@/types/feedback';

// Generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Generate random dates from the last 30 days
const getRandomDate = (daysAgo = 30): Date => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date;
};

// Mock authors
const authors = [
  'Sarah Johnson',
  'Michael Chen',
  'Olivia Rodriguez',
  'David Kim',
  'Emma Williams',
];

// Mock comments
const generateComments = (count: number) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: generateId(),
      author: authors[Math.floor(Math.random() * authors.length)],
      content: [
        "I completely agree with this suggestion!",
        "This would save me so much time.",
        "I've been waiting for something like this.",
        "Not sure if this is a priority, but it would be nice to have.",
        "This would be a game-changer for our team.",
        "I've encountered this issue as well.",
      ][Math.floor(Math.random() * 6)],
      createdAt: getRandomDate(15),
    });
  }
  return comments;
};

// Mock feedback data
export const mockFeedback: Feedback[] = [
  {
    id: generateId(),
    title: "Implement dark mode across the platform",
    description: "Many employees work late or prefer dark interfaces. Adding a dark mode would reduce eye strain and improve overall user experience.",
    category: "ui" as FeedbackCategory,
    status: "planned" as FeedbackStatus,
    votes: 42,
    author: authors[0],
    comments: generateComments(3),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(15),
  },
  {
    id: generateId(),
    title: "Add keyboard shortcuts for common actions",
    description: "To improve productivity, we should implement keyboard shortcuts for frequently used features like saving, navigating between sections, and submitting forms.",
    category: "improvement" as FeedbackCategory,
    status: "in-progress" as FeedbackStatus,
    votes: 38,
    author: authors[1],
    comments: generateComments(5),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(10),
  },
  {
    id: generateId(),
    title: "Fix data loading performance on dashboard",
    description: "The dashboard takes too long to load when there are many projects. We need to optimize the data fetching or implement pagination to improve the user experience.",
    category: "bug" as FeedbackCategory,
    status: "new" as FeedbackStatus,
    votes: 27,
    author: authors[2],
    comments: generateComments(2),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(5),
  },
  {
    id: generateId(),
    title: "Bulk action support for task management",
    description: "Currently, we need to modify tasks one by one. Adding support for bulk actions would save time when updating multiple tasks with the same status or assignee.",
    category: "feature" as FeedbackCategory,
    status: "new" as FeedbackStatus,
    votes: 19,
    author: authors[3],
    comments: generateComments(1),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(3),
  },
  {
    id: generateId(),
    title: "Integrate with MS Teams for notifications",
    description: "Many of our teams use Microsoft Teams for communication. Having notifications sent directly to Teams would keep everyone informed without checking multiple platforms.",
    category: "feature" as FeedbackCategory,
    status: "completed" as FeedbackStatus,
    votes: 35,
    author: authors[4],
    comments: generateComments(4),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(20),
  },
  {
    id: generateId(),
    title: "Add export to CSV functionality",
    description: "We need the ability to export data to CSV format for further analysis in Excel or other tools.",
    category: "feature" as FeedbackCategory,
    status: "planned" as FeedbackStatus,
    votes: 23,
    author: authors[0],
    comments: generateComments(2),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(8),
  },
  {
    id: generateId(),
    title: "Improve mobile responsiveness",
    description: "The application is difficult to use on mobile devices. We should improve the responsive design for better mobile experience.",
    category: "improvement" as FeedbackCategory,
    status: "in-progress" as FeedbackStatus,
    votes: 31,
    author: authors[2],
    comments: generateComments(3),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(12),
  },
  {
    id: generateId(),
    title: "Fix login issue with SSO",
    description: "Some users are experiencing problems when logging in with Single Sign-On (SSO). This needs to be fixed urgently.",
    category: "bug" as FeedbackCategory,
    status: "completed" as FeedbackStatus,
    votes: 40,
    author: authors[3],
    comments: generateComments(6),
    createdAt: getRandomDate(),
    updatedAt: getRandomDate(25),
  },
];

// Categories with their display properties
export const categories = [
  { id: 'all', label: 'All', color: 'bg-gray-500' },
  { id: 'ui', label: 'UI/UX', color: 'bg-purple-500' },
  { id: 'feature', label: 'Feature', color: 'bg-blue-500' },
  { id: 'bug', label: 'Bug', color: 'bg-red-500' },
  { id: 'improvement', label: 'Improvement', color: 'bg-green-500' },
  { id: 'other', label: 'Other', color: 'bg-orange-500' },
];

// Statuses with their display properties
export const statuses = [
  { id: 'all', label: 'All', color: 'bg-gray-500' },
  { id: 'new', label: 'New', color: 'bg-blue-500' },
  { id: 'planned', label: 'Planned', color: 'bg-purple-500' },
  { id: 'in-progress', label: 'In Progress', color: 'bg-yellow-500' },
  { id: 'completed', label: 'Completed', color: 'bg-green-500' },
  { id: 'declined', label: 'Declined', color: 'bg-red-500' },
];

// Sort options
export const sortOptions = [
  { value: 'most-votes', label: 'Most Votes' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];
