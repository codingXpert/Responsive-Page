const express = require('express');
const path = require('path');
require('./db/conn')
const app = express();
const port =process.env.PORT || 8000;

// setting the path
const staticPath = path.join(__dirname , "../public");

// middleware
app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")));  //including bootstrap path
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")));   // including bootstrap.js
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/jquery/dist")));        // including jquery
app.use(express.static(staticPath));

// setting viwe engine
app.set("view engine" , "hbs");

// Routes
app.get("/" , (req , res) => {
    res.render("index");
})


// listning to server
app.listen(port , (err) => {
    if(err){
        console.log(`Error while connecting to server due to ${err}`);
    }
    console.log(`Server is running on the port ${port}`);
})