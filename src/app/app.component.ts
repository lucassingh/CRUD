import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular5 CRUD';
  msg:string ='';
  hideUpdate:boolean = true;

  employees = [{
    "name": "Staci",
    "position": "Project Manager",
    "email": "rrope1@redcross.org"
  }, {
    "name": "Doroteya",
    "position": "Technical Lider",
    "email": "jfalconertaylor0@cmu.edu"
  }, {
    "name": "Philipa",
    "position": "Fron-end Developer",
    "email": "tferrelli2@uiuc.edu"

  }, {
    "name": "Caressa",
    "position": "QA Tester",
    "email": "lkopke3@paginegialle.it"
  }, {
    "name": "Berkeley",
    "position": "Back-end developer",
    "email": "mspellsworth4@youku.com"
  }];


  model:any = {};
  model2:any = {};

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Field has been added successfully!';
  }

  deleteEmployee(i):void{
    var answer = confirm ('Are you sure you want to delete this field?');
    
    if(answer){
      this.employees.splice(i,1);
      this.msg = 'The field has been deleted successfully!';
    }
  }
  myValue;
  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.myValue=i;
  }

  updateEmployee():void{    
    let i = this.myValue;
    for(let j =0; j < this.employees.length; j++){
      if(i==j){
        this.hideUpdate = true;
        this.employees[i] = this.model2;
        this.msg = 'The field has been updated successfully!';
        this.model2 ={};
      }
    }
  }
  closeAlert():void{
    this.msg='';
  }
}
