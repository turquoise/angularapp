import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: string[];
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  }
  data: any[] = [];
  jsonusers: any[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    //console.log(this.dataService.getUsers());
    this.dataService.getJsonUsers()
      .subscribe( users => {
        //console.log(users);
        this.jsonusers = users;
      });

    this.users = this.dataService.getUsers();
    this.dataService.getData()
      .subscribe( mydata => {
        console.log(mydata);
        this.data.push(mydata);
      });
  }

  ngOnInit() {
  }

  onDeleteClick(id) {
    //console.log(id);
    this.dataService.deleteUser(id)
      .subscribe( res => {
        //console.log(res);
        for (let i = 0; i < this.jsonusers.length; i++) {
          if (this.jsonusers[i].id == id) {
            this.jsonusers.splice(i, 1);
          }
        }
      });
  }

  onEditClick(user) {
    this.isEdit = true;
    this.user = user;
  }

  onJsonSubmit(isEdit) {
    if (isEdit) {
      this.dataService.updateUser(this.user)
        .subscribe( user => {
          for (let i = 0; i < this.jsonusers.length; i++) {
            if (this.jsonusers[i].id == this.user.id) {
              this.jsonusers.splice(i, 1);
            }
          }
          this.jsonusers.unshift(this.user);
        });
    } else {
      this.dataService.addUser(this.user)
        .subscribe( user => {
          // push to an array to the beginning.
          console.log(user);
          this.jsonusers.unshift(user);
        });
    }

  }



}
