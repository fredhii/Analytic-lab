
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Commerce } from "../models/commerce";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommercesService {
  baseURL = environment.apiURL + 'commerces';
  constructor(private http: HttpClient) { }

  getCommerce(): Observable<Commerce[]>{
    return this.http
      .get(this.baseURL)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new Commerce(item.id, item.name, item.nit,
                item.address, item.phone, item.owner,
                item.schedule, item.days, item.sales)
          )
        )
      );
  }
}
