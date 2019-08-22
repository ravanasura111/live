import { NgModule } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from '../map/map.service';

@NgModule({
  declarations: [
   MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCs4w8ceJ3Xq9TMgVYVHC5UJfli0BYc4ww'
        
      })
  ],
  providers: [MapService]
})
export class MapModule { }
