import React from 'react';

export const FailedSaveCard = ({onClose}) => {
  return (
    <div id="failedSaveCard" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-red-600">Error</h3>
          <button id="closeButton" className="text-gray-600 hover:text-gray-900" onClick={()=>{onClose()}}>&times;</button>
        </div>
        <p className="mt-4 text-gray-600">Failed to save changes. Please try again.</p>
        <div className="mt-6 text-right">
          <button id="tryAgainButton" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={()=>{onClose()}}>Try Again</button>
        </div>
      </div>
    </div>
  );
};


