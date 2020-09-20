import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //  @Output() change =new EventEmitter()
  data: any;
  lableName: any;
  value = '';
  //email=localStorage.getItem('email')
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  email = localStorage.getItem('email')

  gridView: boolean = true;
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  constructor(public dialog: MatDialog, public router: Router, private toDoService: UserServiceService) { }

  ngOnInit() {
    // this.toDoService.getToDoList().snapshotChanges()
    //   .subscribe(item => {
    //     this.toDoListArray = [];
    //     item.forEach(element => {
    //       var x = element.payload.toJSON();
    //       x["$key"] = element.key;
    //       this.toDoListArray.push(x);
    //     })

    //     //sort array isChecked false  -> true
    //     this.toDoListArray.sort((a, b) => {
    //       return a.isChecked - b.isChecked;
    //     })
    //   });
  }

}



