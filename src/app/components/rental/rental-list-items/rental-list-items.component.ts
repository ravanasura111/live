import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-list-items',
  templateUrl: './rental-list-items.component.html',
  styleUrls: ['./rental-list-items.component.css']
})
export class RentalListItemsComponent implements OnInit {

  @Input() rentalData:any
  constructor() { }

  ngOnInit() {
  }

}
