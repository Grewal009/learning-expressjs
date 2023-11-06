const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("request received");
});

// response is same for every request and on every route
// app.use((req, res) => {
//   res.send("This is a basic response.");
// });

// it will convert object to json representation
// app.use((req, res) => {
//   res.send({ name: "apple", color: "red" });
// });

app.get("/", (req, res) => {
  res.send("you are on root path.");
});

app.get("/apple", (req, res) => {
  res.send("you are on apple path.");
});

app.get("/orange", (req, res) => {
  res.send("you are on orange path.");
});
app.get("*", (req, res) => {
  res.send("this path doesnot exist.");
});
