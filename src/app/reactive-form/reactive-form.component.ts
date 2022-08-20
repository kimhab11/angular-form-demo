import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  title = new FormControl('');

  constructor() { }
  updateTitle(){
    this.title.setValue('kimhab');
  }

  ngOnInit(): void {
  }

}
