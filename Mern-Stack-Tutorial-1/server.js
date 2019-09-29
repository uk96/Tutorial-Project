const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = config.mongoURI;

// Connect to mongoDB
mongoose
    .connect(db , config.configMongoose)
    .then(() => console.log('MongoDB Connected....'))
    .catch((err) => console.log(err));

//Use Routes
app.use('/api/items',items);

const port = process.env.port || 5000;

app.listen(port,() => console.log('Server started on port '+port));


