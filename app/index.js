const express = require("express");
const app = express();

// ======== VIEWS
const exhbs = require("express-handlebars");
const hbs = require("hbs");
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.engine("hbs", exhbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
    helpers: {
        check: (stuff, val) => {
            if(stuff === val) {
                return true;
            } else {
                return false;
            }
        }
    }
}));
app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + "server/views/partials");
// ======== DB
require('./models/db');

const routes = require("./routes");
app.use("/", routes);

app.listen(4001);

module.exports = app;