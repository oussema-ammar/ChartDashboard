import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  openChart(): void {
    console.log('Div clicked! Open details');
    /* Replace with a method that enlarges the chart and displays 
    its details next to it. Preferably on top of the already existing interface 
    with a return/X button that closes the Interface */
  }
}

