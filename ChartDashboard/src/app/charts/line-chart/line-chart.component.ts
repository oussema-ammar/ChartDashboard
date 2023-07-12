import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['../charts.scss']
})
export class LineChartComponent {

  @Input() chartData: any;
  public chart: any;
  
  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges)  {
    if(this.chart){
      console.log(this.chartData.labels);
      //everything up to this point works as intended
      this.chart.destroy();
      this.createChart();
      //this.chart.update() does not work so I used destory + create
    }
  }
  
  createChart(){
    this.chart = new Chart("chart1", {
      type: 'line',
      data: this.chartData,
      options: {
        aspectRatio: 1.5
      }
    });
  }
}
