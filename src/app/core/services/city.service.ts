import { Injectable } from '@angular/core';

import { CITIES } from 'src/app/mocks/cities.mock';
import { City } from '../interfaces/city';
import { FORECASTS } from '../../mocks/forecasts.mock';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getCities(): Array<City> {
    return CITIES;
  }

  getForecast(cityId: number){
    return FORECASTS.find(forecast => forecast.cityId === cityId);
  }
  //constructor() { }
}
