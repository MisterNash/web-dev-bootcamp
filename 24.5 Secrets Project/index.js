import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var isUserAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const password = req.body["password"];
  if ( password == "ILoveProgramming") {
    isUserAuthorized = true;
  }  
  next();
}
app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (req, res) => {
  if ( isUserAuthorized ) {
    res.sendFile(__dirname + "/public/secret.html")
  } else {
    res.sendFile(__dirname + "/public/index.html")
  }
});

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`)
})

