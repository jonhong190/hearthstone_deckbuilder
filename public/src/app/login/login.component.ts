import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logUser: any;
  loggedIn: any;
  @Output() currentUser = new EventEmitter();
  constructor(
    private _appService:AppService,
    private _router: Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.logUser = { email: "", password: "" }
  }
  loginUser(logUser) {
    this.logUser = logUser;
    console.log(this.logUser)
    this._appService.loginUser(logUser).subscribe((data) => {
      console.log("here", data)
      if (data['data'].length == 0) {
        this._router.navigate(['/home']);
      } else {
        this._appService.user = data['data'][0];
        this.currentUser.emit("logged in")
        this._router.navigate(['/profile/' + data['data'][0]._id])
      }

    })
  }
}
