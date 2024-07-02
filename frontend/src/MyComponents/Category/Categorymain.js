import React from "react";
import { Cards } from "./Cards";


export const Categorymain = ({ categoryData , }) => {

  /* JSON Data*/
 

    
  return (
    <div className="category  mt-4 flex  ">
     
      <div className="border-6 w-full">
        {Object.keys(categoryData).map((categoryName) => {
          if (categoryData.hasOwnProperty(categoryName)) {
            return (
              <div key={categoryName} className="lg:ml-28 lg:mr-28 ">
                <h1 className="text-3xl font-bold  bg-clip-text sm:p-4 rounded-lg shadow-md m-8 text-left">
                  <a id={categoryName}>{categoryName}</a> 
                </h1>

                <div className="category-cardsilist  flex   ">
                  {
                    <div className="w-full hide-scrollbar  category-cardsilist flex md:flex-wrap  overflow-x-scroll  margin-auto">
                      {" "}
                      {/* remove overflow by using flex-wrap and hide-scrollbar is custom class in index.css to remove scrollbar */}
                      {categoryData[categoryName].items.map((card) => {
                        return <Cards key={card.cardId} {...card} />;
                      })}
                    </div>
                  }
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
