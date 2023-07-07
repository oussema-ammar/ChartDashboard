import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  public chart: any;

  createChart(){
    this.chart = new Chart("chart2", {
      type: 'bar', //type of chart

      data: {// values on X-Axis
        labels: ['07-10', '07-11', '07-12','07-13',
								 '07-14', '07-15', '07-16','07-17', ], 
	       datasets: [
          {
            label: "Boiler 1",
            data: ['467','576', '532', '479', '592',
								 '574', '520', '576'],
          },
          {
            label: "Boiler 2",
            data: ['542', '582', '536', '427', '517',
									 '475', '538', '561'],
          }  
        ],

      },
      options: {
        aspectRatio:1.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Pressure (atm)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        }    
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
