import React from 'react';

export const Corouselnew = ({ categoryData }) => {
  
  const handleSmoothScroll = (e, categoryName) => {
    e.preventDefault();
    const element = document.getElementById(categoryName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='h-72 mt-8 '>
      <div className='h-12 sm:ml-20 sm:mr-20 flex justify-between items-center'>
        <p className='text-3xl font-bold  md:ml-20 ml-10'>Category</p>
        <div className='w-20 flex justify-between'>
        
        </div>
      </div>
      <div className='hide-scrollbar h-56 border-2 rounded-xl mt-2 sm:ml-20 sm:mr-20 flex justify-between items-center overflow-x-auto overflow-y-hidden'>
        {Object.keys(categoryData).map((categoryName) => (
          <a href={`#${categoryName}`} key={categoryName} className=' rounded-xl w-72 min-h-34  h-34 ml-16 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl hover:' onClick={(e) => handleSmoothScroll(e, categoryName)}>
            <img
              src={categoryData[categoryName].imageId}
              alt={categoryName}
              className='rounded-xl min-w-20 min-h-20  w-20 h-20 object-cover mt-2 max-w-full'
            />
            <p className='text-sm font-medium mt-2'>{categoryName}</p>
          </a>
        ))}
       
        
      </div>
    </div>
  );
};
