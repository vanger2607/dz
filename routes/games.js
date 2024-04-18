const gamesRouter = require("express").Router(); // Создали роутер
const {sendAllGames, deleteGame, addGameController} = require("../controllers")



gamesRouter.get("/games", sendAllGames)
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.post("/games", addGameController) 

module.exports = gamesRouter; 
