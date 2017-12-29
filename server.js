var express = require('express');
var homeRoute = require('./app/routes/homeRoute.js');
var testRoute = require('./app/routes/testRoute.js');
var path = require('path');

var app = express();

// process.env.port needed for deployment...will use deployed env port defaults
var PORT = process.env.PORT || 3000;

//make all files available in Public folder
app.use(express.static(path.join(__dirname, 'app/public')))

// make swiper css and js files available
app.use(express.static(path.join(__dirname + '/node_modules/swiper/dist/')));

//mounting exported node modules routes
app.use('/', homeRoute);
app.use('/test', testRoute);

app.listen(PORT, function(){
    console.log("app listening on " + PORT);
});