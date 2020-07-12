import { Component } from '@angular/core';
import { Commerce } from './models/commerce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public commer:Commerce;

  getValueCommer(comm: Commerce){
    this.commer = comm;
  }
  title = 'Analytic-lab';
}
