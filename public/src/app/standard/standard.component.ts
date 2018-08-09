import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  @Input() showCards: any;
  showClassCards:any;
  classCards:any;
  cardName:any;
  @Output() sendCard = new EventEmitter();
  constructor(
    private _appService: AppService,
    private _router:Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this._route)
      this.getClassCards();
    
  }
  getClassCards(){
    this._appService.getClassCards(this._route.snapshot.routeConfig.path).subscribe((data) => {
      console.log(data)
      this.classCards = [];
      let arr = data['data']['body']
      for (var i = 40; i < arr.length; i++) {
        if (arr[i]['cardSet'] == 'Basic' || arr[i]['cardSet'] == 'Classic' || arr[i]['cardSet'] == "Journey to Un'Goro" || arr[i]['cardSet'] == 'Kolbolds & Catacombs' || arr[i]['cardSet'] == 'The Witchwood' || arr[i]['cardSet'] == 'Knights of the Frozen Throne' && arr[i]['collectible']) {
          if (arr[i]['collectible']) {
            this.classCards.push(arr[i]);
          }
        }
      }
      console.log(this.classCards);
    })
  }
      
  getOneCard(name){
    this.cardName = name;
    this._appService.getOneCard(this.cardName).subscribe((data)=>{
      console.log(data);
      this.sendCard.emit(data['data']);
    })
  }
  
  
}
