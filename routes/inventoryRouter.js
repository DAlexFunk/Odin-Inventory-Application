const { Router } = require("express");
const { handleGet } = require("../controllers/inventoryController");
const inventoryRouter = Router();

inventoryRouter.get("/", handleGet);

module.exports = inventoryRouter;
