// AdvancedFilters.tsx

import React, { useState } from 'react';

interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  category: string;
  // Add more filter options as needed
}

interface AdvancedFiltersProps {
  onApplyFilters: (filters: FilterOptions) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 1000,
    category: '',
    // Initialize other filter options as needed
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="advanced-filters">
      <h2>Advanced Filters</h2>
      <div className="filter-option">
        <label htmlFor="minPrice">Minimum Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="filter-option">
        <label htmlFor="maxPrice">Maximum Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="filter-option">
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={filters.category} onChange={handleInputChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add more category options as needed */}
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default AdvancedFilters;
