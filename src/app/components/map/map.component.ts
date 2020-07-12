import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';
import { MapService } from '../../services/map.service';
import { Commerce } from '../../models/commerce';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {


  @Input() focus: Commerce; // value set in app.component 

  mapComm: mapboxgl; // map
  mapJson: any; // JSON values
  coor: number; // coordenates of focus value
  constructor(private mapService: MapService) { }

  ngOnInit(){
    /* Create base map */
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapComm = new mapboxgl.Map({
    container: 'map-pos',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.12544250488281,
      4.538778849955251], // starting position*/
    zoom: 12 // starting zoom
    });


    // Get values from API, using map Service
    this.mapService.getLayer().subscribe((mapFromAPI: any) =>{
      this.mapJson = Object.keys(mapFromAPI).map(key => mapFromAPI[key]);
      this.setMarkers();
      console.log(`sdfsd ${this.focus.name}`);
    }, (err: any) => {
      console.log(err);
    });

  }

  // listening of setting value of focus variable
  ngOnChanges() {
    this.focusToCommerce(this.focus);
  }
  
  // set a marker on the map
  setMarker(cor: number[]){
      const marke = new mapboxgl.Marker().setLngLat(cor).addTo(this.mapComm);
  }

  // set all markets on the map
  setMarkers(){
    for (let value of this.mapJson){
      this.setMarker(value.geometry.coordinates);
    }
  }

  // Search value of coordenates in JSON depending of value in focus
  private focusToCommerce(input: any){
    for (let value of this.mapJson){
      if (value.properties.name === this.focus.name){
        const coor = value.geometry.coordinates;
        this.mapComm.flyTo({center : coor, speed: 0.9, zoom: 16});
        return;
      }
    }
  }




}
