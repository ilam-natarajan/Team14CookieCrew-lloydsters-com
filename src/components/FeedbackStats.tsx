
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeedback } from '@/contexts/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useFeedback();
  
  // Calculate statistics
  const totalFeedback = feedback.length;
  const totalVotes = feedback.reduce((sum, item) => sum + item.votes, 0);
  
  const statusCounts = {
    new: feedback.filter(item => item.status === 'new').length,
    planned: feedback.filter(item => item.status === 'planned').length,
    'in-progress': feedback.filter(item => item.status === 'in-progress').length,
    completed: feedback.filter(item => item.status === 'completed').length,
    declined: feedback.filter(item => item.status === 'declined').length,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Feedback</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{totalFeedback}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Votes</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{totalVotes}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{statusCounts['in-progress']}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="py-2 px-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-2xl font-bold">{statusCounts.completed}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackStats;
