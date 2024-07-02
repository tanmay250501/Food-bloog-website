const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const User = require("./model/Model");
const { Menu } = require("./model/JsonModel"); // Import the Menu model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");



const app = express();
app.use(bodyParser.json());
app.use(cors());


const PORT = 10000;
const MONGOURL = "mongodb+srv://bopanwarvedant27:xddK5q9NYgXgZ4Ts@cluster0.xsprekn.mongodb.net/crud";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const URL  = "mongodb+srv://bopanwarvedant27:xddK5q9NYgXgZ4Ts@cluster0.xsprekn.mongodb.net";
const client = new MongoClient(MONGOURL );
const dbName = "myDatabase";


mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
    });
}).catch((error) => console.log(error));

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Invalid token, forbidden
      req.user = user; // Attach decoded user information to request
      next(); // Proceed to the next middleware/route handler
  });
};



// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Checking credentials for email:", email);
    console.log("Password from request:", password);
    // Find user by email
    const user = await User.findOne({ email });
    console.log("User found:", user);
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Ensure user object has password field
    if (!user.password) {
        console.log("User does not have a password field:", user);
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Trim and convert passwords to lowercase for case-insensitive comparison
    const trimmedPassword = password.trim().toLowerCase();
    const trimmedUserPassword = user.password.trim().toLowerCase();

    // Compare plaintext passwords
    if (trimmedPassword !== trimmedUserPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // If passwords match, generate JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// New endpoint to fetch menu data
app.get("/menu", async (req, res) => {
    try {
        const menu = await Menu.findOne(); // Fetch the first document in the 'menus' collection
        if (!menu) {
            return res.status(404).json({ message: "Menu data not found" });
        }
        res.json(menu);
    }catch (error) {
        console.error("Error fetching menu data:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


app.post("/update-json", authenticateToken, async (req, res) => {
    let data = req.body;

    if (Array.isArray(data) && data.length === 0) {
      data = [
          {
              "name": "New Category 1",
              "imageId": "",
              "items": []
          }
      ];
  }

    try {
      await client.connect();
      console.log("Connected correctly to server");
  
      const db = client.db(dbName);
      const col = db.collection("myCollection");
  
      const newJsonObject = {};
  
      data.forEach((category) => {
        const categoryName = category.name;
        const categoryData = {
          imageId: category.imageId,
          items: category.items.map((item) => ({
            cardId: item.cardId,
            imageId: item.imageId,
            title: item.title,
            type: item.type,
            mealDetail: item.mealDetail,
            ingredients: item.ingredients,
            youtubeUrl: item.youtubeUrl,
          })),
        };
        newJsonObject[categoryName] = categoryData;
      });
  
      let arrToObj = JSON.stringify(newJsonObject, null, 2);
  
      // Delete all documents in the collection
      await col.deleteMany({});
  
      // Insert the new JSON object
      const result = await col.insertOne(newJsonObject);
      console.log("Inserted new document with id:", result.insertedId);
  
      res.status(200).send({ success: true, insertedId: result.insertedId });
    } catch (err) {
      console.log(err.stack);
      res.status(500).send({ success: false, error: err.message });
    } finally {
      await client.close();
    }
  });
  
  app.get("/get-json", async (req, res) => {
    try {
      await client.connect();
      console.log("Connected correctly to server");
  
      const db = client.db(dbName);
      const col = db.collection("myCollection");
  
      // Retrieve the current JSON object (assuming only one document is in the collection)
      const document = await col.findOne({});
  
      if (document) {
        res.status(200).send(document);
      } else {
        res.status(404).send({ success: false, message: "No document found" });
      }
    } catch (err) {
      console.log(err.stack);
      res.status(500).send({ success: false, error: err.message });
    } finally {
      await client.close();
    }
  });



module.exports = app;
