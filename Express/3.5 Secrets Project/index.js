//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  

  app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

