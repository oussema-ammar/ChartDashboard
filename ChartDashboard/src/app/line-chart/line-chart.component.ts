import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  public chart: any;

  createChart(){
    this.chart = new Chart("chart1", {
      type: 'line', //Type of chart

      data: {// values on X-Axis
        labels: ['07-10', '07-11', '07-12','07-13',
								 '07-14', '07-15', '07-16','07-17', ], 
	       datasets: [
          {
            label: "Outside",
            data: ['37','35', '36', '32', '29',
								 '31', '26', '24'],
          },
          {
            label: "Inside",
            data: ['29', '28', '28', '26', '24',
									 '25', '23', '21'],
          }  
        ]
      },
      options: {
        aspectRatio: 1.5
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
  
}
