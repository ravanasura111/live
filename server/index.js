const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
=======
const bodyParser = require('body-parser');
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
const config = require('../server/config/dev');
const Rental = require('../server/models/rental');
const FakeDb = require('./fake-db');

<<<<<<< HEAD
const rentalRoutes = require('./routes/rentals');
=======
const rentalRoutes = require('./routes/rentals'),
       userRoutes = require('./routes/users');
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
});

const app = express();

<<<<<<< HEAD
app.use('/api/v1/rentals', rentalRoutes);
=======
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed


const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running');
})
