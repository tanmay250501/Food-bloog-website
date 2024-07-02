const mongoose = require("mongoose");

// Define the item schema
const itemSchema = new mongoose.Schema({
  cardId: { type: Number, required: true },
  imageId: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  mealDetail: { type: String, required: true },
  ingredients: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
});

// Define the category schema
const categorySchema = new mongoose.Schema({
  imageId: { type: String, required: true },
  items: [itemSchema],
});

// Define the menuData object
const menuData =[
  {
    category: "Veg-Masala-Tadka",
    imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
    items: [
      {
        cardId: 1,
        imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
        title: "Pizza Hut",
        type: "Pizzas, Italian",
        mealDetail: "Delicious hand-tossed pizzas with a variety of toppings.",
        ingredients: "Wheat flour, Cheese, Tomato sauce, Olive oil, Vegetables",
        youtubeUrl: "https://www.youtube.com/watch?v=kuOkPuC1mNw"
      },
      // ... other items
    ]
  },
  {
    category: "Non-Veg",
    imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
    items: [
      {
        cardId: 3,
        imageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
        title: "KFC",
        type: "Fried Chicken, Fast Food",
        mealDetail: "Crispy and juicy fried chicken with a secret blend of herbs and spices.",
        ingredients: "Chicken, Flour, Spices, Oil, Buttermilk",
        youtubeUrl: "https://www.youtube.com/watch?v=kuOkPuC1mNw"
      },
      // ... other items
    ]
  },
  // ... other categories
];

// Dynamically create the menu schema based on menuData
const dynamicSchemaDefinition = {};
Object.keys(menuData).forEach((category) => {
  dynamicSchemaDefinition[category] = categorySchema;
});

const menuSchema = new mongoose.Schema(dynamicSchemaDefinition);

// Create the Menu model
const Menu = mongoose.model("Menu", menuSchema);

module.exports = { Menu, menuData, itemSchema, categorySchema };
