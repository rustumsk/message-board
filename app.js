const express = require('express');
const app = express();
const path = require('path');
const {indexRoute} = require('./routes/indexRoute');
const {main} = require('./model/populateDb');
require('dotenv').config();
main();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(process.env.PORT, () =>{
    console.log(`Server is up, Listening on PORT: ${process.env.PORT}`);
})
