import { NgModule } from '@angular/core';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemsComponent } from './rental-list-items/rental-list-items.component';
import { Routes, RouterModule } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { RentalDetailsComponent } from '../rental-details/rental-details.component';
const routes: Routes = [
    { path: 'rentals', 
      component: RentalComponent,
     children: [
          {path: '', component:RentalListComponent},
          {path:':rentalId', component:RentalDetailsComponent}
      ]
     }
  ];
@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemsComponent,
        RentalDetailsComponent
    ],
    providers:[RentalService],
    imports: [RouterModule.forRoot(routes),CommonModule],
})
export class RentalModule {

}