const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../server/config/dev');
const Rental = require('../server/models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals'),
       userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running');
})
