const Rental = require('./models/rental');
<<<<<<< HEAD
=======
const User = require('./models/user');
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed

class FakeDb {
    constructor() {
        this.rentals = [{
            title: "Nice view on ocean",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 43
        },
        {
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 11
        },
        {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 23
<<<<<<< HEAD
=======
        }];
        this.users = [{
            username: "Test User",
            email: "test@gmail.com",
            password: "testtest"
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
        }]



    }
     
   async cleanDb() {
<<<<<<< HEAD
      await  Rental.remove({});
    }
    pushRentalsToDb() {
        this.rentals.forEach((rental) => {
           
            const newRental = new Rental(rental);
            newRental.save();
        })
    }
    seeDb() {
        this.cleanDb();
        this.pushRentalsToDb();
=======
       await User.remove({});
      await  Rental.remove({});
    }
    pushDataToDb() {
        const user = new User(this.users[0]);
        this.rentals.forEach((rental) => {
           
            const newRental = new Rental(rental);
            newRental.user = user;

            user.rentals.push(newRental);
            newRental.save();
        });
        user.save();
    }
   async seeDb() {
       await this.cleanDb();
        this.pushDataToDb();
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
    }
}


module.exports = FakeDb;