import React from 'react'

export const SaveChangeCard = ({onClose}) => {
  return (
    <div id="saveChangeCard" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-green-600">Success</h3>
        <button id="closeButton" className="text-gray-600 hover:text-gray-900" onClick={()=> onClose()}>&times;</button>
      </div>
      <p className="mt-4 text-gray-600">Your changes have been saved successfully!</p>
      <div className="mt-6 text-right">
        <button id="okButton" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={()=>{onClose()}}>OK</button>
      </div>
    </div>
  </div>
  )
}
