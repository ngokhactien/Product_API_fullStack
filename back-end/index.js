const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const routes = require('./routes/index');

const port = 8080;

mongoose.connect('mongodb://localhost/QlSanPham', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors());

app.use('/',routes);

app.listen(port)