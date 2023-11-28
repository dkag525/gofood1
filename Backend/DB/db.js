const mongoose = require("mongoose");

const mongodbURL =
  "mongodb://GoFood:gofood@ac-plpcdnp-shard-00-00.imsx8kf.mongodb.net:27017,ac-plpcdnp-shard-00-01.imsx8kf.mongodb.net:27017,ac-plpcdnp-shard-00-02.imsx8kf.mongodb.net:27017/?ssl=true&replicaSet=atlas-5kr48f-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongodb;
