import express from "express";
import bodyParser from "body-parser";
import pg  from "pg"
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user:  "postgres",
  host:   "localhost",
  database: "World",
  password: "maazkhan1234",
  port: 5433
})

db.connect();


app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.post("/add", async (req,res) =>{
  const user_Entry = req.body.country.trim();
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [user_Entry]);
  console.log(result.rows)

  res.redirect("/")
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
