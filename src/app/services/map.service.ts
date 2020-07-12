import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  baseURL = environment.apiURL + 'commerces/layer';

  constructor(private http: HttpClient) { }


  // get values from API : JSON
  getLayer() {
    return this.http.get( this.baseURL )
      .pipe(map((response: any) => response.features));
  }

}
