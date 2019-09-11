var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var cors = require('cors');
var app = express();


app.use(session({
        secret: '这是一个穷游的网站',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 24 * 5 * 60 * 1000,
            secure: false,
        }
    }
));
app.use(cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080",
        "http://127.0.0.1:4000", "http://localhost:4000"
    ],
    credentials: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
