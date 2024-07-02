import React, { createContext, useState } from "react";

const Admincontext = createContext();

export const AdminProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState({}); //main.js
  const [categoryData, setCategoryData] = useState({}); //main.js
  const [cards, setCards] = useState([]); // Admincategoryedit.js, Admincardsedit.js
  const [originalCards, setOriginalCards] = useState([]); //Admincategoryedit.js
 
  
  const [countCategoryEffect, setCountCategoryEffect] = useState(0);
  
  return (
    <Admincontext.Provider
      value={{
        cards,
        setCards,
        originalCards,
        setOriginalCards,
        originalData,
        setOriginalData,
        categoryData,
        setCategoryData,
        countCategoryEffect, setCountCategoryEffect
      }}
    >
      {children}
    </Admincontext.Provider>
  );
};

export default Admincontext;
