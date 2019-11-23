var express = require("express");
var router = express.Router();

var bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

var ctrlHomepage = require('./ctrls/index');
var ctrlData = require('./ctrls/data');

// Homepage
router.get("/", ctrlHomepage.login);
router.post("/", urlencodedParser, ctrlHomepage.doLogin);

// Users query
router.get("/:data", ctrlData.readAll);
router.get("/:data/:id", ctrlData.deleteOne);
router.post("/:data/update/:id", urlencodedParser,  ctrlData.updateOne);
router.post("/:data/", urlencodedParser, ctrlData.createOne);

module.exports = router;