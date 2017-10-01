import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: string[];
  data: any[] = [];

  constructor(private dataService: DataService) {
    //console.log(this.dataService.getUsers());
    this.users = this.dataService.getUsers();
    this.dataService.getData()
      .subscribe( mydata => {
        console.log(mydata);
        this.data.push(mydata);
      });
  }

  ngOnInit() {
  }



}
