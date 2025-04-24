
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
    <div className="bg-white p-4 rounded-md shadow mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="space-y-2 flex-grow">
          <h3 className="text-sm font-medium text-gray-500">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category.id} 
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === category.id ? 'bg-primary' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status.id} value={status.id}>
                    <div className="flex items-center">
                      <div className={`${status.color} w-2 h-2 rounded-full mr-2`} />
                      {status.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFilters;
