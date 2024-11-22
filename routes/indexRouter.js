const { Router } = require("express");
const { indexGet, indexPost } = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexGet);
indexRouter.post("/", indexPost);

module.exports = indexRouter;
