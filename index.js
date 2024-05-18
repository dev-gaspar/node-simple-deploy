const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("~ index.js ~ 🚀 Servidor corriendo en puerto 3000");
});
