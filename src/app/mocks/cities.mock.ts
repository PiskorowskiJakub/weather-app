import { City } from "../core/interfaces/city";

export const CITIES: Array<City> = [
    {
        name: 'Szczecin',
        forecast: {
            conditions: 'cloudy',
            wind: {
                speed: 6,
                direction: 'north-west'
            },
            temperature:{
                day:{
                    min: -1,
                    max: 5
                },
                night: {
                    min: -5,
                    max: 0
                }
            }
        }
    },
    {
        name: 'Warszawa',
        forecast: {
          conditions: 'rain',
          wind: {
            speed: 3,
            direction: 'east'
          },
          temperature: {
            day: {
              min: 11,
              max: 14
            },
            night: {
              min: 3,
              max: 7
            }
          }
        }
      },
      {
        name: 'Krakow',
        forecast: {
          conditions: 'sunny',
          wind: {
            speed: 2,
            direction: 'south'
          },
          temperature: {
            day: {
              min: -10,
              max: -7
            },
            night: {
              min: -18,
              max: -12
            }
          }
        }
      }
];