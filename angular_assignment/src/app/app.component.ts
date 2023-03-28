import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor( private mainService: MainService) {}

  public getLocationData() {
    this.mainService.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c6694858137c179c803da39fe73dac29').subscribe((data: any) => {
      console.log(data);
    });
  }


  title = 'angular_assignment';
}
