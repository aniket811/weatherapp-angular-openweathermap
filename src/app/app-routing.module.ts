import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"",component:WeatherComponent},
  {path:"crypto",component:BitcoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
