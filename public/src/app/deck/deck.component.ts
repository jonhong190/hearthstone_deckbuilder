import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  @Input() addCard:any;
  @Input() class:any;
  userDeckList : any=[];
  newUserCard:any;
  newDeck:any;
  user:any="";
  title:any;
  cards:any;

  newList:any;
  constructor(
    private _appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.newDeck={};
    this.newDeck.title="";
    this.newDeck.cards;
    this.cards = {card_name:"", card_image:""};
    this.user = this._appService.user;

  }

  postDeck(newDeck){
    this.user = this._appService.user;
    newDeck.cards=[];
    for(var i = 0; i < this.addCard.length;i++){
      this.cards = {card_name: this.addCard[i]['name'], card_image:this.addCard[i]['img']};
      newDeck.cards.push(this.cards);
    }
    this.newDeck.class = this.class;
    console.log("deck", newDeck)
    this._appService.addDeck(this.user,newDeck).subscribe((data)=>{
      this._router.navigate(['/profile/'+this.user._id]);
    })

    
  }





}
