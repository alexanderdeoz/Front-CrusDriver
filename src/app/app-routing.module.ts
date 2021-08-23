import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'Driver',
    loadChildren:()=>import('./driver/driver.module').then(m=>m.DriverModule)
  },
  {
    path:'Travel',
    loadChildren:()=>import('./travel/travel.module').then(m=>m.TravelModule)
  },
  {
    path:'**',
    redirectTo:''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
