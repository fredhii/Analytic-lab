import { Component, OnInit } from '@angular/core';
import { CommercesService } from '../../services/commerces.service';
import { Output, EventEmitter } from '@angular/core';
import { Commerce } from '../../models/commerce';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  commerces: Commerce[];
  focus_co: any;
  @Output() eventToSend = new EventEmitter<object>();

  constructor(private commerceService: CommercesService) {
   }

  // get values from JSON
  ngOnInit(): void {
    this.commerceService.getCommerce().subscribe((commerFromAPI: Commerce[]) =>{
      this.commerces = commerFromAPI;
      this.addNewItem(this.commerces[0]);
    }, (err: any) => {
      console.log(err);
    });
  }

  getValue(event: any){
    this.focus_co = this.commerces.find(element => event.target.innerHTML == element.name);
    this.addNewItem(this.focus_co);
  }

  addNewItem(value: Commerce) {
    this.eventToSend.emit(value);
  }

}
