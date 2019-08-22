import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() location: string;
  lat: number;
  lng: number;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.geoCodeLocation(this.location).subscribe((coordinates) => {
         this.lat = coordinates.lat;
         this.lng = coordinates.lng;
    });
  }

}
