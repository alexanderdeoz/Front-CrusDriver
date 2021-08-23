import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DriverRoutingModule } from './driver-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    ListComponent, 
    RegistroComponent],
  imports: [
 
    CommonModule,
    DriverRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    CardModule
  ]
})
export class DriverModule { }
