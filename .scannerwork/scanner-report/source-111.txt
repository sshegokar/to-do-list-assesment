import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar,private route:Router) {
  }
  data: any;
  id: any;
  model: any;
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])

  ngOnInit() {

  }
  getEmailError() {
    return this.email.hasError('required') ? 'email cannot be empty' :
      this.email.hasError('pattern') ? 'invalid email' : ''
  }
  getPassError() {
    return this.password.hasError('required') ? 'password cannot be empty' :
      this.password.hasError('pattern') ? 'invalid password' : ''
  }
  next() {
    if(this.email.value=="" ||this.password.value=="")
    {
      this.snackBar.open('Enter proper details', 'End Now', { duration: 3000 })
    }else{
    this.model = {

      email: this.email.value,
      password: this.password.value,
    }
    console.log("data", this.model);

    this.userService.login(this.model).subscribe(
      (response: any) => {
        console.log("response=>", response);


        var res = response.id;
        var id=response.userId
        console.log("token", res,id);
        localStorage.setItem('token', res)
        localStorage.setItem('userId',id)
        localStorage.setItem('firstName',response.firstName)
        localStorage.setItem('lastName',response.lastName)
        localStorage.setItem('url',response.url)
        localStorage.setItem('email',response.email)
        this.route.navigate(['dashboard'])
        // this.data = response
        console.log("login sucessfully", this.data)
        this.snackBar.open('login successfully', 'End Now', { duration: 3000 })
      },
      error => {
        console.log(error)
        this.snackBar.open('Enter proper details', 'End Now', { duration: 3000 })
      }


    )


  }

  }

}
