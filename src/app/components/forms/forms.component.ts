import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  text: string = 'Hello World';
  value: boolean = true;
  name: string = '';
  age: number = 0;
  users: string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];
  user = {
    name: '',
    email: '',
    phone: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onNgSubmit({ value, valid}) {
    if(valid) {
      console.log(value);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmit() {
    //console.log(this.name);
    this.users.push(this.name);
    this.name = '';
  }

  fireEvent(e) {
    //console.log('button clicked');
    //console.log(e.target.id);
    console.log(e.type);
  }

  changeValue() {
    //this.text = 'Goodbye World';
    //this.value = false;
    this.value = !this.value;
  }

  changeText(event) {
    this.text = event.target.value;
  }



}
