const gamesRouter = require("express").Router(); // Создали роутер
const {sendAllGames, deleteGame, addGameController} = require("../controllers")
const  getAllGames = require("../middlewares")


gamesRouter.use(getAllGames)
gamesRouter.get("/games", sendAllGames)
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.post("/games", addGameController) 

module.exports = gamesRouter; 
