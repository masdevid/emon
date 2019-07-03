const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const conf = require('./env.conf')
const indexRouter = require('./routes/index');
const cors = require('cors')
const app = express();
const mongoo = require('./db/mongoo')
mongoo.connect()
app.use(logger('dev'));
app.use(cors(conf.corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

module.exports = app;
