import { Component } from '@angular/core';
import { DataFilterService } from '../charts/data-filter.service';
import { ChartDataProviderService } from '../charts/chart-data-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  lineChartData=this.chartDataProvider.getLineChartData();
  barChartData=this.chartDataProvider.getBarChartData();
  public filterValue: string= "";

  constructor(private dataFilterService: DataFilterService, private chartDataProvider: ChartDataProviderService) { }

  applyFilter(): void {
    // here we can input the filter value manually for now
    this.filterValue="07-11";
    this.dataFilterService.setFilterValue(this.filterValue);
    this.lineChartData = this.filterChartData(this.filterValue, this.lineChartData);
    this.barChartData = this.filterChartData(this.filterValue, this.barChartData);
    console.log("Data changed");
  }

  ngOnInit(): void {
     this.dataFilterService.filterValue$.subscribe(filterValue => {
      this.lineChartData = this.filterChartData(filterValue, this.lineChartData);
      this.barChartData = this.filterChartData(filterValue, this.barChartData);
    });
  } 

  filterChartData(filterValue: string, chartData: any): any {
    const filterIndex = chartData.labels.indexOf(filterValue);
    const filteredChartData = {
      labels: chartData.labels.slice(filterIndex + 1),
      datasets: chartData.datasets.map((dataset: { label: string; data: string[] }) => ({
        ...dataset,
        data: dataset.data.slice(filterIndex + 1)
      }))
    };
    return filteredChartData;
  }

  openChart(): void {
    console.log('Div clicked! Open details');
    /* Replace with a method that enlarges the chart and displays 
    its details next to it. Preferably on top of the already existing interface 
    with a return/X button that closes the Interface 
    Perhaps using Angular Materials*/
  }

}

