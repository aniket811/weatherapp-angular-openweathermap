import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  weather:any[]= [];
  title = 'practice';
  counter:number = 0;
  isShow:boolean = false;
  constructor(private weatherServices:WeatherService){}

  public getWeather(city:string){
    this.weatherServices.getWeather(city).subscribe(data=>{
      this.weather.push(data as any)
      debugger;
      this.isShow = true;
      console.log(this.weather);
    });
  }
}
