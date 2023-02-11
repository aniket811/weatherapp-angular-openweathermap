import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  public getWeather(city:string):Observable<any[]>{
    return this.http.get<any[]>('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4776f3cb0f67c30d16dd152487bef8b6&units=metric');
  }
}
