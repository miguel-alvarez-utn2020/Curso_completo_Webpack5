const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const pathToHtmlFile = path.join(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf8");

  res.send(contentFromHtmlFile);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
