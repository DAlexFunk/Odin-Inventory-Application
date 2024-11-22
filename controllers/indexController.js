async function indexGet(req, res) {
  res.render("index");
}

async function indexPost(req, res) {
  if (req.body.inventory) {
    res.send("inventory");
  } else if (req.body.edit) {
    res.send("edit");
  } else {
    res.send("ERROR");
  }
}

module.exports = { indexGet, indexPost };
