import { Injectable } from '@angular/core';

import { CITIES } from 'src/app/mocks/cities.mock';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getCities(): Array<City> {
    return CITIES;
  }
  //constructor() { }
}
