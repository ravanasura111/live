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
import { MapModule } from '../map/map.module';
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
    imports: [RouterModule.forRoot(routes),CommonModule,HttpClientModule,NgPipesModule,MapModule],
})
export class RentalModule {

}