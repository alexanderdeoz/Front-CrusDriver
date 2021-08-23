import { Component, OnInit } from '@angular/core';
import { DriverModel } from '../../../models/index'
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {

  formDriver: FormGroup;



  constructor(private formBuilder: FormBuilder) {
    this.formDriver = this.newFormDriverRegistro();
  }

  ngOnInit() {

  }

  newFormDriverRegistro(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null],
      birthday: [null],
      joined_date: [null],
      email: [null],
      phone: [null],
      deleted_at: [null],
      created_at: [null],
      updated_at: [null]

    })
  }


  onSubmit() {
    console.log('Registrando usuarios Nuevos')
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
