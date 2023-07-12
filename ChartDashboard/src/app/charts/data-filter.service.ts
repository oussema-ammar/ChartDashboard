import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {

  private filterValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public filterValue$: Observable<string> = this.filterValueSubject.asObservable();

  setFilterValue(filterValue: string): void {
    this.filterValueSubject.next(filterValue);
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
  
}
