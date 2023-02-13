import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  constructor(private getcrypto:WeatherService) { }
  public crypto:any[]=[];
  ngOnInit(): void {
    
        this.getcrypto.getCrytoNews().subscribe((data:any[])=>{
        this.crypto.push(data as any)
          console.log(this.crypto);
       });
  }
}
