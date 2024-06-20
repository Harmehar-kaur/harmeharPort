// git remote add origin https://github.com/Harmehar-kaur/brewStack.git
// git branch -M main
// git push -u origin main

const express = require('express');
// const path = require('path'); 
// const env = require('./config/environment');
// const cookieParser = require('cookie-parser');

const app = express(); 

const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// const session = require('express-session');
// const passport = require('passport');
// const passportLocal = require('./config/passport-local-strategy');
// const passportJWT = require('./config/passport-jwt-strategy');
// const passportGoogle = require('./config/passport-google-oauth2-strategy');

const MongoStore = require('connect-mongo');
// const flash = require('connect-flash');
// const customMware = require('./config/middleware');

app.use(express.urlencoded());
// app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs'); //easy rendering 
app.set('views', './views');

// app.use(
//     session({
//       name: 'brewStack',
//       secret: 'nE}"9E!2KB%ZtPj',
//       saveUninitialized: false,
//       resave: false,
//       cookie: {
//         maxAge: 1000 * 60 * 100,
//       },
//       store: new MongoStore({
//         mongoUrl: 'mongodb://127.0.0.1:27017/brewStack', 
//         mongooseConnection: db,
//         autoRemove: 'disabled'
//       }, function (err) {
//         console.log(err || 'connect-mongodb setup ok');
//       })
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(passport.setAuthenticatedUser);

// app.use(flash());
// app.use(customMware.setFlash);
// // Assuming your static files are in the "assets" directory
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', require('./routes'));


app.listen(port, function(err){ //code functional or not
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});