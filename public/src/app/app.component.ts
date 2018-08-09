import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';
import { ActivatedRoute,Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: any = [];
  cardInfo: any = [];
  standardCards: any;
  classes: any;
  user:any;

  constructor(
    private http: Http,
    private _appService: AppService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    
  }
  ngOnInIt(){
    this.getUser()
  }
  showClasses() {
    this.classes = "a";

  }
  getUser(){
    this.user = this._appService.user;
    console.log("in get user");
  }
  profile(){
    this.user = this._appService.user;
    this._router.navigate(['/profile/'+this.user._id]);
  }
  getUserData(data){
    console.log(data);
    this.user="a"
  }
}
