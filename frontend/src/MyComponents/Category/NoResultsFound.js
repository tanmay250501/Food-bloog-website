import React from 'react';

export const NoResultsFound = () => {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800">No Results Found</h1>
        <p className="mt-4 text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    </div>
  );
};


