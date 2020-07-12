import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Graph } from '../models/graph';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  baseURL = environment.apiURL + 'commerces/graph';
  constructor(private http: HttpClient) { }


  getGraph(): Observable<Graph[]>{
    return this.http
      .get(this.baseURL)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new Graph(item.name, item.sales)
          )
        )
      );
  }
}
