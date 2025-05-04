import express from "express";
import bodyParser from "body-parser";
import pg from  "pg"

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "maazkhan1234",
  port: 5433,
})

db.connect();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.username
  try{
    await db.query("Insert into users (email,password) VALUES ($1, $2) "),[email,password]

  }catch(err){
    console.log(err)

  }
  
  res.render("secrets.ejs");

});

app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.username
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
