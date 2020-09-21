const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./network/routes');
const rutas = require('./network/rutas');
const dbConnect = require("./db");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbConnect();
routes(app);
rutas(app);

app.listen(3000);