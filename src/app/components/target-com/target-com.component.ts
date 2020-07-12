import { Component, OnInit, Input } from '@angular/core';
import { Commerce } from "../../models/commerce";


@Component({
  selector: 'app-target-com',
  templateUrl: './target-com.component.html',
  styleUrls: ['./target-com.component.css']
})
export class TargetComComponent implements OnInit {

  @Input() commer: Commerce;
  constructor() { }

  ngOnInit(): void {
  }

}
