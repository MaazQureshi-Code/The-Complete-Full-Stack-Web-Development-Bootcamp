import express  from "express"
const app = express();
const port = 3000;  /// This is our port 
// our first express server 
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
