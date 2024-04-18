const { readData, writeData } = require("../utils/data");

const getAllGames = async (req, res, next) => {
  // Читаем список игр из файла
  const games = await readData("./data/games.json");
  if (!games) {
    res.status(400);
    res.send({
      status: "error",
      message: "Нет игр в базе данных. Добавьте игру.",
    });
    return;
  }
  req.games = games;
  next();
};

const checkIsTitleInArray = async (req, res, next) => {
  isNew = !Boolean(req.games.find((item) => item.title === req.body.title));
  if (!isNew) {
    res.status(400);
    res.send({ status: "error", message: "Игра с таким именем уже есть." });
    return;
  }
  next();
};

const updateGamesArray = async (req, res, next) => {
  // Добавляем объект с данными о новой игре
  const inArray = req.games.map((item) => Number(item.id));
  let maximalId;
  if (inArray.length > 0) {
    maximalId = Math.max(...inArray);
  } else {
    maximalId = 0;
  }
  req.updatedObject = {
    id: maximalId + 1,
    title: req.body.title,
    image: req.body.image,
    link: req.body.link,
    description: req.body.description,
  };
  // Добавляем данные о новой игре в список с другими играми
  req.games = [...req.games, req.updatedObject];
  next();
};

const updateGamesFile = async (req, res, next) => {
    await writeData("./data/games.json", req.games);
    next();
  };

  const findGameById = (req, res, next) => {
    const id = Number(req.params.id);
    req.game = req.games.find(item => item.id === id);
    next();
  };
  
  const deleteGame = (req, res, next) => {
    const id = req.game.id;
    const index = req.games.findIndex(item => item.id === id);
    req.games.splice(index, 1);
    next();
  };
  
  module.exports = {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
  }; 
