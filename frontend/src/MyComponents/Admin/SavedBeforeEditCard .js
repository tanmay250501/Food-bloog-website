import React from "react";

export const SavedBeforeEditCard = ({onClose , onSave}) => {
  return (
    <div id="savedBeforeEditCard" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-700">Change the saved before Editcards ot Reset</h2>
          <button
            id="closeButton"
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => onClose()}
          >
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0">
          <button
            id="saveButton"
            className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 sm:mr-1"
            onClick={()=>{onSave(); onClose()}}
          >
            Save Changes
          </button>
          <button
            id="closeButton"
            className="w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 sm:ml-1"
            onClick={()=>onClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
