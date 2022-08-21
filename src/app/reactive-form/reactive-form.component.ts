import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('email'); // hold value = email

  constructor() { }
  updateTitle(){
    this.name.setValue('kimhab');  // update to kimhab
  }

  ngOnInit(): void {
  }

}
