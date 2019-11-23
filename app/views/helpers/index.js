const hbs = require("hbs");

hbs.registerHelper("checkAccess", (user) => {
    if(user.accesslvl == 1 && user.name == "users") {
        return true;
    } else {
        return false;
    }
});
