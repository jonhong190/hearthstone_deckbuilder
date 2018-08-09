import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newUser: any;
  classes:any;
  successMsg:any;
  constructor(
    private _appService: AppService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.newUser={first_name:"", last_name:"", email:"", password:""};
    this.successMsg="";

  }
  createUser(newUser){
    this._appService.createUser(this.newUser).subscribe((data)=>{
      this.newUser = {first_name:"", last_name:"", email:"", password:""};
      console.log(data)
      this._router.navigate(['/profile/'+data['data']._id]);
      this._appService.user = data['data'];
    })
  }

  showClasses(){
    this.classes="a";

  }
}
