const mongoose = require('mongoose');
const { Menu, menuData } =require("./model/JsonModel");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Clear the existing data
    return Menu.deleteMany({})
      .then(() => {
        // Add the new menuData
        const menu = new Menu(menuData);
        return menu.save();
      });
  })
  .then(() => {
    console.log('Menu saved!');
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

  
