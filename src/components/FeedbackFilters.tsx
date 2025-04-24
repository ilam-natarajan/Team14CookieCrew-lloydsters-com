
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useFeedback } from '@/contexts/FeedbackContext';
import { categories, statuses, sortOptions } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const FeedbackFilters = () => {
  const { 
    selectedCategory, 
    setSelectedCategory,
    selectedStatus, 
    setSelectedStatus,
    sortOption,
    setSortOption
  } = useFeedback();

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
      <div className="space-y-3">
        {/* Categories */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-medium text-gray-500">Categories</h3>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((category) => (
              <Badge 
                key={category.id} 
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`cursor-pointer text-xs py-0.5 px-2 ${selectedCategory === category.id ? 'bg-primary' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filters row */}
        <div className="flex gap-2">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="h-9 text-xs flex-1">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status.id} value={status.id} className="text-xs">
                  <div className="flex items-center">
                    <div className={`${status.color} w-2 h-2 rounded-full mr-2`} />
                    {status.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="h-9 text-xs flex-1">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="text-xs">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFilters;
