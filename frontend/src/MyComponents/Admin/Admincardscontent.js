import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import _ from "lodash";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Admincontext from "./Admincontext";
import { SaveChangeCard } from "./SaveChangeCard";
import { FailedSaveCard } from "./FailedSaveCard";


export const Admincardscontent = () => {
  const location = useLocation();
  const { itemIndex, categoryIndex } = location.state;

  const [showSaveChangeCard, setShowSaveChangeCard] = useState(false);
  const [showFailedSaveCard, setShowFailedSaveCard] = useState(false);

  // Define states
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [mealDetail, setMealDetail] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageId, setImageId] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const { cards, setCards } = useContext(Admincontext);

  // Create deep clone for original values using useRef
  const originalMealDetail = useRef("");
  const originalIngredients = useRef("");
  const originalYoutubeUrl = useRef("");

  // Editable states
  const [editableMealDetail, setEditableMealDetail] = useState("");
  const [editableIngredients, setEditableIngredients] = useState("");
  const [editableYoutubeUrl, setEditableYoutubeUrl] = useState("");
  const [newYoutubeUrl, setNewYoutubeUrl] = useState("");

  useEffect(() => {
    const updateData =() => {
     
        const selectedItem = cards[categoryIndex].items[itemIndex];
      
        setYoutubeUrl(selectedItem.youtubeUrl);
        setMealDetail(selectedItem.mealDetail);
        setIngredients(selectedItem.ingredients);
        setImageId(selectedItem.imageId);
        setTitle(selectedItem.title);
        setType(selectedItem.type);

        // Set initial editable states
        setEditableYoutubeUrl(selectedItem.youtubeUrl);
        setEditableMealDetail(selectedItem.mealDetail);
        setEditableIngredients(selectedItem.ingredients);

        // Set initial values for refs
        originalMealDetail.current = selectedItem.mealDetail;
        originalIngredients.current = selectedItem.ingredients;
        originalYoutubeUrl.current = selectedItem.youtubeUrl;

       
      
    };
    updateData();
  }, [categoryIndex, itemIndex]);

  const filterIdFromData = (data) => {
    const { _id, __v, ...rest } = data;
    return rest;
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSave = async () => {
    const updatedCards = _.cloneDeep(cards);
    const category = updatedCards[categoryIndex];
    const updatedItems = [...category.items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      mealDetail: editableMealDetail,
      ingredients: editableIngredients,
      youtubeUrl: editableYoutubeUrl,
    };
    updatedCards[categoryIndex] = {
      ...category,
      items: updatedItems,
    };
    setCards(updatedCards);

    
   
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/update-json`,
        updatedCards ,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(
        
        response.data
      );
      originalMealDetail.current = _.cloneDeep(editableMealDetail);
      originalIngredients.current = _.cloneDeep(editableIngredients);
      originalYoutubeUrl.current = _.cloneDeep(editableYoutubeUrl);
      
      setShowSaveChangeCard(true);
    } catch (error) {
      console.log("Error sending data", error);
      setShowFailedSaveCard(true);
    }
  };

  const handleReset = () => {
    setEditableMealDetail(originalMealDetail.current);
    setEditableIngredients(originalIngredients.current);
    setEditableYoutubeUrl(originalYoutubeUrl.current);
  };

  const handleAddLink = () => {
    setEditableYoutubeUrl(newYoutubeUrl);
    setNewYoutubeUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-white flex justify-between items-center px-4 py-3 shadow-lg">
        <h1 className="text-xl font-bold flex items-center">
          <img
            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1249956578.1712072062&semt=ais_user_b"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          My Food App
        </h1>
        <Link to="/">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-200">
            Back to Home
          </button>
        </Link>
      </header>
      <main className="flex-grow overflow-y-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="w-full md:w-1/2 h-56 md:h-96 mb-6 md:mb-0 md:mr-8 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden ">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url={editableYoutubeUrl}
            />
          </div>
          <div className="w-full md:w-3/4 mt-4 md:mt-0 border-2 rounded-2xl border-cyan-400 p-4 bg-white shadow-lg">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                {title}
              </h2>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  className="border-2 border-blue-400 rounded-2xl p-2 mb-2"
                  placeholder="Enter new YouTube URL"
                  value={newYoutubeUrl}
                  onChange={(e) => setNewYoutubeUrl(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-200"
                  onClick={handleAddLink}
                >
                  Add Link
                </button>
              </div>
              <div className="text-gray-700 m-2 text-start min-h-60 max-h-96 flex md:flex-row flex-col-reverse md:items-center">
                <textarea
                  className="md:w-1/2 border-2 border-blue-400 rounded-2xl hide-scrollbar mt-4 p-4 mr-2 overflow-y-auto min-h-40 md:min-h-72 max-h-80"
                  value={editableMealDetail}
                  onChange={(e) => setEditableMealDetail(e.target.value)}
                />
                <img
                  className="rounded-xl h-40 w-60 md:h-72 md:w-2/5 ml-auto mr-auto mt-4 object-cover"
                  src={imageId}
                  alt={title}
                />
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center space-x-2">
                  <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
                    Type:
                  </p>
                  <p className="text-lg">{type}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500 overflow-x-auto	">
                  Ingredients
                </h3>
                <textarea
                  className="text-gray-700 w-full border-2 border-blue-400 rounded-2xl p-4 overflow-x-auto"
                  value={editableIngredients}
                  onChange={(e) => setEditableIngredients(e.target.value)}
                />
              </div>
              <div className="flex justify-around">
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-200"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-all duration-200"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showSaveChangeCard && (
        <SaveChangeCard onClose={() => setShowSaveChangeCard(false)} />
      )}
      {
        showFailedSaveCard && (
          <FailedSaveCard onClose ={() => setShowFailedSaveCard(false)} />
        )
      }
    </div>
  );
};
