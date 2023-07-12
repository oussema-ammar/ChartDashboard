import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataProviderService {

  constructor() { }

  getBarChartData() {
    // To be replaced with a method to return dynamic data 
    return {
      labels: ['07-10', '07-11', '07-12', '07-13', '07-14', '07-15', '07-16', '07-17'],
      datasets: [
        {
          label: "Boiler 1",
          data: ['467', '576', '532', '479', '592', '574', '520', '576'],
        },
        {
          label: "Boiler 2",
          data: ['542', '582', '536', '427', '517', '475', '538', '561'],
        }
      ]
    };
  }

  getLineChartData() {
    // To be replaced with a method to return dynamic data
    return {
      labels: ['07-10', '07-11', '07-12','07-13', '07-14', '07-15', '07-16','07-17'], 
      datasets: [
        {
          label: "Outside",
          data: ['37','35', '36', '32', '29', '31', '26', '24'],
        },
        {
          label: "Inside",
          data: ['29', '28', '28', '26', '24', '25', '23', '21'],
        }  
      ]
    };
  }

}
