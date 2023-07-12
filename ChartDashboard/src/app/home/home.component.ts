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

  applyFilter(minValue: string){
    this.filterValue=minValue;
    this.dataFilterService.setFilterValue(this.filterValue);
    this.lineChartData = this.dataFilterService.filterChartData(this.filterValue, this.chartDataProvider.getLineChartData());
    this.barChartData = this.dataFilterService.filterChartData(this.filterValue, this.chartDataProvider.getLineChartData());
    console.log("Data changed");
  }

  ngOnInit(): void {
     this.dataFilterService.filterValue$.subscribe(filterValue => {
      this.lineChartData = this.dataFilterService.filterChartData(filterValue, this.lineChartData);
      this.barChartData = this.dataFilterService.filterChartData(filterValue, this.barChartData);
    });
  } 


  openChart(): void {
    console.log('Div clicked! Open details');
    /* Replace with a method that enlarges the chart and displays 
    its details next to it. Preferably on top of the already existing interface 
    with a return/X button that closes the Interface 
    Perhaps using Angular Materials*/
  }

}

