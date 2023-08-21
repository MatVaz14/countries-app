const { Router } = require("express");
// Importar todos los routers;
const countrieRouter = require("./countrieRouter.js");
const activityRouter = require("./activityRouter.js");

const router = Router();

// Configurar los routers
router.use("/", countrieRouter);
router.use("/", activityRouter);

module.exports = router;
