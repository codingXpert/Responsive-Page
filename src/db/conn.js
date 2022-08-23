const mongoose = require('mongoose');

//creating a database
mongoose.connect("mongodb://localhost:27017/dynamic" ,{
    useNewUrlParser:true
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(`Error in connecting to db ${err}`);
});