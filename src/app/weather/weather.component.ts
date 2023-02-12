import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(private weatherServices:WeatherService) { }
  weather:any[]= [];
  count:number = 0;
  title = 'practice';
  weatherImg="fa-solid fa-sun-bright"
  counter:number = 0;
  isShow:boolean = false;
  public getWeather(city:string){
    this.weatherServices.getWeather(city).subscribe(data=>{
      this.counter++;
      console.log(this.counter);
      
      if(this.counter ==2){

        this.weather.pop();
      }
      this.weather.push(data as any);
      this.isShow = true;
    });
  }
}
