import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{environment}from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
 
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getDataRegister(data) {
    return this.http.post(this.baseUrl+'users', data.body);
  }
  getDataLogin(data) {
    return this.http.post(this.baseUrl + 'users/login', data.body);
  }
  getDataForgot(data) {
    return this.http.post(this.baseUrl + 'users/reset', data.body);
  }
  getDataReset(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('access_token')
      })
    };
    console.log('token in post3', localStorage.getItem('access_token')
    );
    return this.http.post(this.baseUrl + 'users/reset-password', data.body, httpOptions);
  }
  addNote(data: { body: any; }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token in post3', localStorage.getItem('token')
    );

    return this.http.post(this.baseUrl+'notes', data.body, httpOptions);
  }

  getNote() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token ', localStorage.getItem('token')
    );
    return this.http.get(this.baseUrl + 'notes/getNotes', httpOptions);
    
  }
  updateNotes(data: { body:any}) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl+'notes/updateNotes', data.body, httpOptions);
  }
  updateColor(data: { body: any; }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl+'notes/updateColor', data.body, httpOptions);
  }

  updateReminder(data: { body: any; }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log("dataaaaaa",data.body);
    
    return this.http.post(this.baseUrl+'notes/reminder', data.body, httpOptions);
  }
  
  createLable(data: { body: any; }) {
   
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      };
      return this.http.post(this.baseUrl+'labels', data.body, httpOptions);
    }
    getLabel() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      };
      return this.http.get(this.baseUrl+'labels/getLabels', httpOptions);
    }
    updateTrash(data: { body: any; }) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      };
      return this.http.post (this.baseUrl+'notes/trash',data.body,httpOptions);
    }
    updateArchive(data: { body: any; }) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      };
      return this.http.post (this.baseUrl+'notes/archive',data.body,httpOptions);
    }
      
    searchNote(data: { body: string; }) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        })
      };
      return this.http.get(this.baseUrl+'notes/search/'+data.body,httpOptions);
    }
    postNewData(uploadData) {
      const httpOptions = {
        headers: new HttpHeaders({
        //  'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        })
      };
      return this.http.post(this.baseUrl+'users/upload',uploadData,httpOptions);
  }
  getVM() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.baseUrl+'vmLabs/getVM', httpOptions);
  }
  vmRegister(data: { body: any; }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl+'vmLabs',data.body,httpOptions);
  }
  updateData(data: { "vmlabName": any; "vmPaltform": any; "vmId": any; }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl+'vmLabs/updateVm',data,httpOptions);
  }
 
   

}



