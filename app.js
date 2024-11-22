const express = require("express");
const path = require("node:path");
require("dotenv").config();
const indexRouter = require("./routes/indexRouter");
const inventoryRouter = require("./routes/inventoryRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/inventory", inventoryRouter);
app.get("*", (req, res) => res.status(404).render("404"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
