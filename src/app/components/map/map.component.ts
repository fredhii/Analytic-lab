import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';
import { MapService } from '../../services/map.service';
import { Map } from '../../models/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapComm: mapboxgl;
  mapJson: any;
  coor: number;
  constructor(private mapService: MapService) { }

  ngOnInit(){
    /* Create base map */
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapComm = new mapboxgl.Map({
    container: 'map-pos',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.036865234375, 4.737253893957665], // starting position
    zoom: 10 // starting zoom
    });

    this.mapService.segunda().subscribe(mapFromAPI =>{
      this.mapJson = mapFromAPI.json();
    }, (err: any) => {
      console.log(err);
    });

    const marke = new mapboxgl.Marker().setLngLat([-74.0980243, 4.7441814]).addTo(this.mapComm);
    /*this.setMarkers();*/
    /*this.setMarker(this.mapJson.features[0].geometry.oordinates[0], this.mapJson.features[0].geometry.oordinates[0]);*/
    this.setMarker();
  }

  setMarker(){
      const marke = new mapboxgl.Marker().setLngLat([-74.08699035644531, 4.742043976363009]).addTo(this.mapComm);
  }

  /*setMarkers(){
    for (let value of this.mapJson.features){
      this.setMarker(value.geometry.coordinates[0], value.geometry.coordinates[1]);
      this.coor = value.geometry.coordinates[0];
    }
  }*/


}
