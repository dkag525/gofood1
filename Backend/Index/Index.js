const express = require("express");
// import express from "express";

const app = express();
const port = 5000;

// Use this line for get Data from mongodb database
const mongodb = require("../DB/db");
mongodb();

//  To Print Hello world
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("../Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
