import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  email?:string
  password?:string // just ex not real

  loginForm:any

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form:any): void {

    this.loginForm=form
    console.log(form)
    console.log(form.value)
  }

}
