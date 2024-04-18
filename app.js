const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
// Импортируем роутеры
const {mainRouter, gamesRouter} = require('./routes');



const PORT = 3000;
const app = express();

// Запускаем
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json(), mainRouter, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 
