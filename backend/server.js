// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello from Node.js backend!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node.js backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
