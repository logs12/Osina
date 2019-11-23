const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports.login = function(req, res) {
    res.render("auth.hbs", {
        title: "Авторизация"
    });
};
module.exports.doLogin = function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, result){
        if(err) return console.log(err);

        if(result) {
            res.render("homepage.hbs", {
                username: result.username,
                coll: [{
                        headers: "Магазины",
                        name: "shop"
                    }, {
                        headers: "Товары",
                        name: "good"
                    }, {
                        headers: "Пользователи",
                        name: "user"
                    }
                ]
            });
        } else {
            res.render("error", {
                message: "Нет такого пользователя."
            });
        }
    });
};
