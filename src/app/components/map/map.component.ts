import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapComm: mapboxgl;
  constructor() { }

  ngOnInit(){
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapComm = new mapboxgl.Map({
    container: 'map-pos',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-75.7611979, 45.3516034], // starting position
    zoom: 17 // starting zoom
    });
  }

}
