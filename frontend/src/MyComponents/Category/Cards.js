import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Cards = (props) => {
        const navigate = useNavigate();
  return (
    
    <div onClick={()=> {navigate("/Cardscontent", {state:{...props}})}} class="  max-w-sm min-h-40 min-w-40 w-1/5  transform transition duration-500 hover:scale-105 hover:shadow-xl m-4 hover:" id={props.title}>
    <div class="flex justify-center  " >
      <img
        className="rounded-xl  h-40 w-60 mt-4 object-cover"
        src={props.imageId}
        alt={props.title}
      />
    </div>
    <div class="p-4">
       <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition duration-300">
          {props.title}
        </h5>
      </div> 
      <p class="mb-3 font-normal text-gray-700">
        {props.type}
      </p>
    </div>
  </div>
  
  );
};
