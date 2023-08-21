const { Router } = require("express");
const { postActivity } = require("../handlers/activityHandler/postActivity.js")

const activityRouter = Router();

//Rutas
activityRouter.post("/activity", postActivity)

module.exports = activityRouter;
