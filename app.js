const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const db = require("./utils/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

db.execute("");

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(3000);
