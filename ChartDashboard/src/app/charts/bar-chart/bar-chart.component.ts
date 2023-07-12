import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['../charts.scss']
})
export class BarChartComponent {

  @Input() chartData: any;
  public chart: any;
  public filteredChartData: any;

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
    this.chart = new Chart("chart2", {
      type: 'bar',
      data: this.chartData,
      options: {
        aspectRatio:1.5    
      }
    });
  }

}
