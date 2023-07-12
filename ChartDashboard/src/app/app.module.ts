import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { ChartsModule } from './charts/charts.module';
import { ChartDataProviderService } from './charts/chart-data-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ChartsModule
  ],
  providers: [ChartDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
