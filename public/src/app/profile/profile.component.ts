import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  targetUser:any;
  decks:any;
  constructor(
    private _appService:AppService
  ) { }

  ngOnInit() {
    this.getAllDecks();
  }

  getAllDecks(){
    this.targetUser = this._appService.user;
    console.log(this._appService.user)
    console.log(this.targetUser)
     this._appService.getOneUser(this.targetUser).subscribe((data)=>{
       this.decks = data['data'][0]['decks'];
       console.log(data);
     })
  }
  deleteDeck(deck){
    this.targetUser = this._appService.user;
    this._appService.deleteDeck(this.targetUser, deck._id).subscribe((data)=>{
      console.log(data);
    })
  }
}
