const { Router } = require("express");
const { getCountries,getCountrieDetail } = require("../handlers/countrieHandler/getCountrie.js");

const countrieRouter = Router();

//Rutas
countrieRouter.get("/countries", getCountries);
countrieRouter.get("/getDetail/:id", getCountrieDetail);

module.exports = countrieRouter;
