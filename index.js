const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require("cors");
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const items = require('./database-pg');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname +"./dist/index.html"));
app.use(cors())

app.use("", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3001!");
});
