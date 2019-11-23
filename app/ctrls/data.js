const mongoose = require('mongoose');

module.exports.readAll = function(req, res) {
    const collname = req.params.data;
    const Coll = mongoose.model(collname);

    Coll.find({}).exec(function(err, data){
        if(err) return console.log(err);

        let coll = [];
        let headers;
        let title;

        if(collname === "user") {
            title = "Пользователи";
            headers = ["ID", "Логин", "Пароль"];
            data.forEach((doc) => {
                coll.push({
					id: doc. id,
                    username: doc.username,
                    password: doc.password
                });
            });
        } else if(collname === "shop") {
            title = "Магазины";
            headers = ["ID", "Наименование", "Адрес"];
            data.forEach((doc) => {
                coll.push({
					id: doc. id,
                    name: doc.name,
                    address: doc.address
                });
            });
        } else if(collname === "good") {
            title = "Товары";
            headers = ["ID", "Наименование", "Цена"];
            data.forEach((doc) => {
                coll.push({
					id: doc. id,
                    name: doc.name,
                    worth: doc.worth
                });
            });
        }

        res.render("datadb/" + collname + "s", {
            title: title,
            table_head: headers,
            table_data: coll
        });
    });
};
module.exports.createOne = function(req, res) {
    if(!req.body) return res.sendStatus(400);

    const collname = req.params.data;
    const Coll = mongoose.model(collname);

    let data;
    if(collname === "user") {
        data = {
            username: req.body.username, 
            password: req.body.password
        };
    } else if(collname === "shop") {
        data = {
            name: req.body.name, 
            address: req.body.address
        };
    } else if(collname === "good") {
        data = {
            name: req.body.name, 
            worth: req.body.worth
        };
    }

    Coll.create(data, function(err, result){
        if(err) return console.log(err);
        res.redirect("/" + collname);
    });
};

module.exports.updateOne = function(req, res) {
    console.log('req = ', req.body);
    if(!req.body) return res.sendStatus(400);

    const collname = req.params.data;
    const Coll = mongoose.model(collname);

    let data;
    if(collname === "user") {
        data = {
            username: req.body.username, 
            password: req.body.password
        };
    } else if(collname === "shop") {
        data = {
            name: req.body.name, 
            address: req.body.address
        };
    } else if(collname === "good") {
        data = {
            name: req.body.name, 
            worth: req.body.worth
        };
    }

    Coll.findByIdAndUpdate({_id: req.params.id}, data, function(err, result){
        if(err) return console.log(err);
        res.redirect("/" + collname);
    });
};

module.exports.deleteOne = function(req, res) {
    const collname = req.params.data;
    const Coll = mongoose.model(collname);

    Coll.findByIdAndDelete({_id: req.params.id}, function(err, result){
        if(err) return console.log(err);
        res.redirect("/" + collname);
    });
};
