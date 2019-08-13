import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { Rentals } from '../../services/rental.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {

  rental:Rentals;
  constructor(private route: ActivatedRoute,private service: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRentals(params['rentalId']);
      }
    );
  }
  
  getRentals(rentalId: string) {
      this.service.getRentalById(rentalId).subscribe(
        (rental: Rentals)=>{
         this.rental= rental;
      });
  }

}
