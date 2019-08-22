const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rentalSchema = new Schema({

    title: {type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: {type: String, require: true, lowercase: true},
    image:{type:String,required: true},
    bedrooms: Number,
    shared: Boolean,
    description:{type: String, required:true},
    dailyRate: Number,
<<<<<<< HEAD
    createdAt: {type: Date, default: Date.now}
=======
    createdAt: {type: Date, default: Date.now},
    user: { type: Schema.Types.ObjectId, ref: 'User' }
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
});

module.exports = mongoose.model('Rental', rentalSchema);