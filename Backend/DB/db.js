const mongoose = require("mongoose");

const mongodbURL =
  "mongodb://GoFood:gofood@ac-plpcdnp-shard-00-00.imsx8kf.mongodb.net:27017,ac-plpcdnp-shard-00-01.imsx8kf.mongodb.net:27017,ac-plpcdnp-shard-00-02.imsx8kf.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-5kr48f-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Connected to MongoDB");

    // Use mongoose.model to create a model for the "food_items" collection
    const FoodItem = mongoose.model(
      "FoodItem",
      new mongoose.Schema({}),
      "food_items"
    );

    // Use the model to find all documents in the collection
    const data = await FoodItem.find({});
    console.log();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongodb;
