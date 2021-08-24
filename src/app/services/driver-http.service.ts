import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DriverModel } from '../models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverHttpService {

  constructor(
    private httpClient: HttpClient
  ) {


  }


  getall(){
    return this.httpClient.get('http://crud-driver.test/drivers');
  }
}
