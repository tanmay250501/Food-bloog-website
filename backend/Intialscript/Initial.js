const mongoose = require('mongoose');

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
  items: { type: [itemSchema], required: true }
});



// Define the menu data object

const data =[
  {
      "name": "Veg-Masala-Tadka",
      "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
      "items": [
          {
              "cardId": 1,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
              "title": "Pizza Hut",
              "type": "Pizzas, Italian",
              "mealDetail": "Delicious hand-tossed pizzas with a variety of toppings.",
              "ingredients": "Wheat flour, Cheese, Tomato sauce, Olive oil, Vegetables",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 2,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/noc7ieivirqxtpujhsgl",
              "title": "UBQ by Barbeque",
              "type": "North Indian, Barbeque",
              "mealDetail": "Succulent barbeque dishes with authentic North Indian spices.",
              "ingredients": "Chicken, Yogurt, Spices, Vegetables, Barbeque sauce",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 3,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iydxtay1mnne2ktw7txe",
              "title": "Barbeque Nation",
              "type": "North Indian, Barbeque",
              "mealDetail": "Wide range of barbeque options with a buffet style serving.",
              "ingredients": "Meat, Paneer, Spices, Vegetables, Chutneys",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 4,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "title": "Burger King",
              "type": "Burgers, American",
              "mealDetail": "Classic American burgers with a variety of fillings.",
              "ingredients": "Beef, Lettuce, Tomato, Cheese, Buns",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 5,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/91afd7c438fcf1a3b55b97c2fbaa1cfa",
              "title": "Radha Krishna Puri",
              "type": "North Indian, Chinese",
              "mealDetail": "Authentic North Indian and Chinese dishes.",
              "ingredients": "Paneer, Capsicum, Soy sauce, Rice, Spices",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 6,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6",
              "title": "Box8 - Desi Meals",
              "type": "North Indian, Biryani, Thalis",
              "mealDetail": "Traditional desi meals with a variety of dishes.",
              "ingredients": "Rice, Chicken, Spices, Vegetables, Yogurt",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 7,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "title": "Green Delight",
              "type": "Salads, Healthy",
              "mealDetail": "Fresh and healthy salads with a variety of dressings.",
              "ingredients": "Lettuce, Tomatoes, Cucumbers, Olive oil, Herbs",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 8,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
              "title": "Veggie Feast",
              "type": "Vegetarian, Continental",
              "mealDetail": "Delicious vegetarian dishes with a continental twist.",
              "ingredients": "Paneer, Bell peppers, Tomatoes, Olive oil, Herbs",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          }
      ]
  },
  {
      "name": "Non-Veg",
      "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
      "items": [
          {
              "cardId": 3,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
              "title": "KFC",
              "type": "Fried Chicken, Fast Food",
              "mealDetail": "Crispy and juicy fried chicken with a secret blend of herbs and spices.",
              "ingredients": "Chicken, Flour, Spices, Oil, Buttermilk",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 4,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/349e8d46-3138-4b19-96b2-df400a77e285_622197.JPG",
              "title": "Domino's Pizza",
              "type": "Pizzas, Italian",
              "mealDetail": "Hot and fresh pizzas with a variety of toppings and crust options.",
              "ingredients": "Wheat flour, Cheese, Tomato sauce, Pepperoni, Vegetables",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 5,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
              "title": "Grill House",
              "type": "Grilled, Barbeque",
              "mealDetail": "Grilled meats and vegetables with a smoky flavor.",
              "ingredients": "Chicken, Beef, Vegetables, Spices, Grill sauce",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 6,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/noc7ieivirqxtpujhsgl",
              "title": "Spicy Chicken",
              "type": "Indian, Fast Food",
              "mealDetail": "Spicy and flavorful chicken dishes with Indian spices.",
              "ingredients": "Chicken, Spices, Oil, Yogurt, Herbs",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 7,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "title": "Chicken Delight",
              "type": "Chicken, Indian",
              "mealDetail": "Delicious chicken dishes with Indian spices.",
              "ingredients": "Chicken, Yogurt, Spices, Onions, Tomatoes",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          }
      ]
  },
  {
      "name": "Curry",
      "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6",
      "items": [
          {
              "cardId": 5,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23728.JPG",
              "title": "Curry House",
              "type": "Indian, Curry",
              "mealDetail": "A variety of Indian curries with rich and flavorful gravies.",
              "ingredients": "Spices, Tomatoes, Onions, Yogurt, Herbs",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 6,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "title": "Veg Curry",
              "type": "Vegetarian, Indian",
              "mealDetail": "Delicious vegetarian curries with rich flavors.",
              "ingredients": "Paneer, Tomatoes, Onions, Spices, Herbs",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 7,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
              "title": "Chicken Curry",
              "type": "Chicken, Indian",
              "mealDetail": "Rich and flavorful chicken curries with Indian spices.",
              "ingredients": "Chicken, Tomatoes, Onions, Spices, Yogurt",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 8,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/91afd7c438fcf1a3b55b97c2fbaa1cfa",
              "title": "Fish Curry",
              "type": "Fish, Indian",
              "mealDetail": "Delicious fish curries with rich and spicy flavors.",
              "ingredients": "Fish, Tomatoes, Onions, Spices, Coconut milk",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          },
          {
              "cardId": 9,
              "imageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/noc7ieivirqxtpujhsgl",
              "title": "Prawn Curry",
              "type": "Prawn, Indian",
              "mealDetail": "Rich and flavorful prawn curries with Indian spices.",
              "ingredients": "Prawns, Tomatoes, Onions, Spices, Coconut milk",
              "youtubeUrl": "https://www.youtube.com/watch?v=kuOkPuC1mNw"
          }
      ]
  }
];

const menuData = {};

data.forEach(category => {
  const categoryName = category.name;
  const categoryData = {
      imageId: category.imageId,
      items: category.items.map(item => ({
          cardId: item.cardId,
          imageId: item.imageId,
          title: item.title,
          type: item.type,
          mealDetail: item.mealDetail,
          ingredients: item.ingredients,
          youtubeUrl: item.youtubeUrl
      }))
  };
  menuData[categoryName] = categoryData;
});

// console.log(JSON.stringify(menuData, null, 2));

// Define the main schema
// Dynamically create the menu schema based on menuData
const dynamicSchemaDefinition = {};
Object.keys(menuData).forEach((category) => {
  dynamicSchemaDefinition[category] = categorySchema;
});

const menuSchema = new mongoose.Schema(dynamicSchemaDefinition);

// Create the Menu model
const Menu = mongoose.model("Menu", menuSchema);




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Clear the existing data
    await Menu.deleteMany({});

    // Add the new menuData
    await Menu.create(menuData);

    console.log('Menu saved!');
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

module.exports = { Menu, menuData, itemSchema, categorySchema };
