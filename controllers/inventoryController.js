async function handleGet(req, res) {
  items = [
    { name: "marimba", category: "concert", price: "4000" },
    { name: "xylophone", category: "concert", price: "2000" },
    { name: "acoustic drum set", category: "drum set", price: "1500" },
  ];
  res.render("inventory", { items });
}

module.exports = { handleGet };
