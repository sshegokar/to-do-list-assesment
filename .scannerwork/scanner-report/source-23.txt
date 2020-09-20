import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  
  constructor(private httpService: HttpServiceService) { }
  register(obj) {
    const data = {
      body: obj
    }
    return this.httpService.getDataRegister(data)
  }
  login(obj) {
    const data = {
      body: obj
    }
    return this.httpService.getDataLogin(data)
  }
  forgot(obj) {
    const data = {
      body: obj
    }
    return this.httpService.getDataForgot(data)
  }
  reset(obj) {
    const data = {
      body: obj
    }
    return this.httpService.getDataReset(data)
  }
  vmRegister(model: any) {
    const data = {
      body: model
    }
    return this.httpService.vmRegister(data)
  }
  


}

