import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListComponent } from './pages/list/list.component';
import { TravelRoutingModule } from './travel-routing.module';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    RegistroComponent, 
    ListComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    FormsModule
  ]
})
export class TravelModule { }
