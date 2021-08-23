import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListComponent } from './pages/list/list.component';



const routes :Routes=[
  {
    path:'',
    children:[
      {path:'registro',component:RegistroComponent},
      {path:'lista',component:ListComponent},
      {path:'**',redirectTo:'/registro'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TravelRoutingModule { }
