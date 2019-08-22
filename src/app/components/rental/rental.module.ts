import { NgModule } from '@angular/core';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { UppercasePipe } from '../pipes/uppercase.pipe';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemsComponent } from './rental-list-items/rental-list-items.component';
import { Routes, RouterModule } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { RentalDetailsComponent } from '../rental-details/rental-details.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { MapModule } from '../map/map.module';
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
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
        RentalDetailsComponent,UppercasePipe
    ],
    providers:[RentalService],
<<<<<<< HEAD
    imports: [RouterModule.forRoot(routes),CommonModule,HttpClientModule,NgPipesModule],
=======
    imports: [RouterModule.forRoot(routes),CommonModule,HttpClientModule,NgPipesModule,MapModule],
>>>>>>> 07c6f6cd70ad4d8fe472abd96b1a104c77bb36ed
})
export class RentalModule {

}