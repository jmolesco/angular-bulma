import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  name:string;
  email:string;
  message:string;
  ngOnInit(): void {
  }
  processForm():void{
    alert("Name : "+ this.name +"\nEmail Address : " + this.email + "\nMessage : "+this.message);
  }
}
