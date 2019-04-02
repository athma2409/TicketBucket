import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private _location: Location) { }

 
  goback(){
    this._location.back();
  }
  ngOnInit() {}

}
