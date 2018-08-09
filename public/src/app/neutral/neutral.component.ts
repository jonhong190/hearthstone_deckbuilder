import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-neutral',
  templateUrl: './neutral.component.html',
  styleUrls: ['./neutral.component.css']
})
export class NeutralComponent implements OnInit {
  @Input() showNeutral:any;
  cardList: any;
  cardName:any;
  @Output() sendCard= new EventEmitter();
  constructor(
    private _appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getNeutral();
  }

  getNeutral(){
    this._appService.getNeutralCards().subscribe((data) => {
      console.log(data)
      this.cardList = [];
      let arr = data['data']['body']
      console.log("arr", arr)
      for (var i = 31; i < arr.length; i++) {
        if (arr[i]['cardSet'] == 'Basic' || arr[i]['cardSet'] == 'Classic' || arr[i]['cardSet'] == "Journey to Un'Goro" || arr[i]['cardSet'] == 'Kolbolds & Catacombs' || arr[i]['cardSet'] == "The Witchwood" || arr[i]['cardSet'] == 'Knights of the Frozen Throne'){
            if(arr[i]['playerClass']=='Neutral' && arr[i]['collectible'])
            this.cardList.push(arr[i]); 
          }
        }
      console.log("here", this.cardList);
    })
  }

  getOneCard(name) {
    this.cardName = name;
    this._appService.getOneCard(this.cardName).subscribe((data) => {
      console.log(data);
      this.sendCard.emit(data['data']);
    })
  }
}
