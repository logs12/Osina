const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

const shopSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
});

const goodSchema = new Schema({
    name: {type: String, required: true},
    worth: {type: String, required: true}
});


mongoose.connect(
    "mongodb://mongo:27017/expressmongo", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Connected");
        }
    }
);

const userModel = mongoose.model('user', userSchema);
mongoose.model('shop', shopSchema);
mongoose.model('good', goodSchema);

userModel.create({ 
    username: 'user',
    password: 'user',
}, function (err, small) {
    if (err) return handleError(err);
    // saved!
});