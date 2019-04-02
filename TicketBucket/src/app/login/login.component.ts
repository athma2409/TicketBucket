import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _location: Location) { }


  goback(){
    this._location.back();
  }


  ngOnInit() {}

}
