const express = require('express');
const path = require('path');
// Импортируем роутеры
const {mainRouter, gamesRouter} = require('./routes');



const PORT = 3000;
const app = express();

// Запускаем
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(mainRouter, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 
