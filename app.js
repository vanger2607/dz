const express = require("express");
const path = require("path");
// Импортируем middleware
const bodyParser = require("body-parser");
const { cors } = require("./middlewares");
// Импортируем роутеры
const { mainRouter, gamesRouter } = require("./routes");

const PORT = 3000;
const app = express();

// Запускаем
app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRouter,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
