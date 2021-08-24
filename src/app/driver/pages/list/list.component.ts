import { Component, OnInit } from '@angular/core';
import { DriverModel } from '../../../models/index'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {DriverHttpService } from '../../../services/driver-http.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  driver: DriverModel={};
  drivers: DriverModel[] = [];
  formDriver: FormGroup;



  constructor(
    private formBuilder: FormBuilder,// importacion para el formulacio reactivo FormBuilder
    private driverHttpService:DriverHttpService 
    ) {  


    this.formDriver = this.newFormDriverList();
/*
    this.driver = {
      id: 123,
      name: 'Steven',
      birthday: new Date(),
      joined_date: new Date(),
      email: 'sad.chinchin@yavirac.edu.ec',
      phone: '0963707783',
    };
*/
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  newFormDriverList(): FormGroup {
    return this.formBuilder.group(
      {
        
        id: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
        name: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
        birthday: [null, [Validators.required]],
        joined_date: [null, [Validators.required]],
        email: [null, [Validators.required,Validators.email]],
        phone: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        deleted_at: [null],
        created_at: [null],
        updated_at: [null]
        
      }
    )
  }



  getDrivers(): void {
    this.driverHttpService.getall().subscribe(
     response=>{console.log(response);
 
    },
    error=>{console.log(error)});
  }

  onSubmit() {
    console.log('osubmit')
  }

  get idField() {
    return this.formDriver.controls['id'];
  }

  get birthdayField() {
    return this.formDriver.controls['birthday'];
  }
  get nameField() {
    return this.formDriver.controls['name'];
  }
  get joined_dateField() {
    return this.formDriver.controls['joined_date'];
  }
  get emailField() {
    return this.formDriver.controls['email'];
  }
  get phoneField() {
    return this.formDriver.controls['phone'];
  }
  get deleted_atField() {
    return this.formDriver.controls['deleted_at'];
  }
  get created_atField() {
    return this.formDriver.controls['created_at'];
  }
  get updated_atField() {
    return this.formDriver.controls['updated_at'];
  }

}
