import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from 'src/app/core/interfaces/forecast';
import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  forecast: any;
  //@Input() forecast: any;

  constructor(
   private route: ActivatedRoute,
   private cityService: CityService
 ) { }

  ngOnInit() {
  this.route.params.subscribe(params => this.initializeForecast(+params.id));
  }

  initializeForecast(id: number){
  this.forecast = this.cityService.getForecast(id);
  }
}
