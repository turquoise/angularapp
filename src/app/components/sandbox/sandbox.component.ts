import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 0.1;

  isSpecial: boolean = true;
  canSave: boolean = true;
  currentClasses = {};
  currentStyles = {};

  customer: Customer;
  customers: Customer[];
  showName: boolean = true;
  greeting: number = 1;
  imageUrl = 'http://lorempixel.com/400/200';
  isUnchanged: boolean = false;

  name: string = "John Doe";
  age: number = 35;
  hasChildren: boolean = true;
  myNumbersArray: number[] = [1,2,3,4,5];
  myStringsArray: string[] = ['hello', 'world'];
  myAnyArray: any[] = [1, 2, 'hello'];
  myTuple: [string, number] = ['hello', 1];
  unusable: void = undefined;
  u: undefined = undefined;
  n: null = null;

  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [
    {
      firstName: 'Rick',
      lastName: 'Grimes'
    },
    {
      firstName: 'Daryl',
      lastName: 'Dixon'
    },
    {
      firstName: 'Carl',
      lastName: 'Grimes'
    },
    {
      firstName: 'Glen',
      lastName: 'Rhee'
    }
  ];

  person = {
    firstName: 'Steve',
    lastName: 'Smith'
  }

  constructor() {
    //console.log('Constructor ran...');
    //this.age = 36;
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.people[2] = 'Carol';
    this.people2[2].firstName = 'Carol';
    this.hasBirthday();
    this.hasBirthday();
    this.hasChildren = false;
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com'
    };
    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com'
      },
      {
        id: 2,
        name: 'Brad Traversy',
        email: 'brad@gmail.com'
      },
      {
        id: 3,
        name: 'Steve Smith',
        email: 'steve@gmail.com'
      }
    ];

  }

  ngOnInit() {
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      special: this.isSpecial
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }

  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }

}
