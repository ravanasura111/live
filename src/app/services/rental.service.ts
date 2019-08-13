import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rentals } from '../services/rental.model';

@Injectable()
export class RentalService {

  private rentals: Rentals[] = [{
    id:"1",
    title:"Central Apartment",
    city:"New York",
    street:"Times Square",
    category:"apartment",
    image:"https://via.placeholder.com/350x250",
    bedrooms: 3,
    description:"Very nice apartment",
    dailyRate:34,
    shared: false,
    createdAt:"24/12/2017"
  },
  {
    id:"2",
    title:"Corner Apartment",
    city:"California",
    street:"Watch Square",
    category:"apartment",
    image:"https://via.placeholder.com/350x250",
    bedrooms: 4,
    description:"Very nice apartment",
    dailyRate:30,
    shared: false,
    createdAt:"4/2/2016"
  },
  {
    id:"3",
    title:"Top Apartment",
    city:"North Carolina",
    street:"Mann Street",
    category:"apartment",
    image:"https://via.placeholder.com/350x250",
    bedrooms: 3,
    description:"Very nice apartment",
    dailyRate:12,
    shared: false,
    createdAt:"4/4/2018"
  },
  {
    id:"4",
    title:"Down Corner Apartment",
    city:"New Jersy",
    street:"12th Street",
    category:"apartment",
    image:"https://via.placeholder.com/350x250",
    bedrooms: 2,
    description:"Very nice apartment",
    dailyRate:26,
    shared: false,
    createdAt:"9/5/2018"
  }];
  constructor() { }

public getRentalById(rentalId: string): Observable<Rentals> {
     return new Observable<Rentals>((observer) => {
         setTimeout(() => {
           const foundRental = this.rentals.find((rental) => {
             return rental.id === rentalId;
           });
           observer.next(foundRental);
         }, 500);
     });
}

  public getRentals(): Observable<Rentals[]> {
    return new Observable<Rentals[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    }) 
  }

}
