import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Map } from '../models/map';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MapService {
  baseURL = environment.apiURL + 'commerces/layer';

  constructor(private http: HttpClient) { }

  getCommerce(): Observable<Map[]>{
    return this.http
      .get(this.baseURL)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new Map(item.type, item.features)
          )
        )
      );
  }

  segunda() {
    return this.http.get( this.baseURL )
                    .pipe(map((response: any) => response.features));
  }
}
