import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>My name is nash</p>")
})

app.listen(port, () => {
  console.log(`Server is live on port : http://localhost:${port}`) 
})

