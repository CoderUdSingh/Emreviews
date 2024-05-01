import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// To parse the incoming JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
