const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("express-flash");
var unirest = require('unirest');
app.use(session({
    secret: "1",
    resave: "false",
    saveUninitialized: true,
    cookie: { maxAge: 5000 }
}))
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
require("./server/models/user.js");
require("./server/models/deck.js");
require("./server/controllers/users.js");
require("./server/controllers/decks.js");

app.listen(8000);