import { Component, OnInit } from '@angular/core';
import { Graph } from 'src/app/models/graph';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  graphs: Graph[];
  names: string[] = [];
  sales: number[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(113,233,227,0.8)',
      borderColor: 'rgba(113,233,227,0.8)',
      pointBackgroundColor: 'rgba(113,233,227,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(113,233,227,0.8)'
    },
    { // second color
      backgroundColor: 'rgba(113,233,227,0.8)',
      borderColor: 'rgba(113,233,227,0.8)',
      pointBackgroundColor: 'rgba(113,233,227,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(113,233,227,0.8)'
    }];

  public barChartLabels = this.names;
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: this.sales, label: 'Sales'}
  ]

  ngOnInit(): void {
    this.graphService.getGraph().subscribe((dataGraph: Graph[]) =>{
      this.graphs = dataGraph;
      this.getList(this.graphs);
    }, (err: any) => {
      console.log(err);
    });
  }

  getList(array: Graph[]){
    for (let value of array){
      this.names.push(value.name);
      this.sales.push(Number(value.sales));
    }
  }


}
