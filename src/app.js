const express = require('express');
const app = express();

const cors = require('cors');
const pool = require('./config/db');

app.use(cors());
app.use(express.json());

const listRoute = require('./routes/list');
app.use(listRoute);

module.exports = app;