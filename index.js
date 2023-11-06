const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("request received");
});

// response is same for every request and on every route
app.use((req, res) => {
  res.send("This is a basic response.");
});

// it will convert object to json representation
// app.use((req, res) => {
//   res.send({ name: "apple", color: "red" });
// });
