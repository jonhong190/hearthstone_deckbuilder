import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shaman',
  templateUrl: './shaman.component.html',
  styleUrls: ['./shaman.component.css']
})
export class ShamanComponent implements OnInit {
  cards:any;
  classCards: any;
  neutralCards:any;
  deck:any;
  newUserCard:any;
  playerDeckList:any=[];
  twoCardCount: any = 0;
  manaCount:any=[];
  avgCost:any;
  formatList:any;
  copyDeckList:any=[];
  orderedList:any=[];
  sendClass:any;
  cardCostArray =[0,0,0,0,0,0,0,0];
  zero: any;

  constructor(
    private _appService: AppService,
    private _router:Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this._route)
    console.log(this._router)
    this.sendClass=this._route['snapshot']['routeConfig']['path'];
    this.getShaman(); 

  }

  getNeutral(){
    this.neutralCards = 'a';
    this.cards=null;
  }
  getShaman(){
   this.cards='a';
   this.neutralCards = null;
  }

  getCard(data) { 
    if(this.copyDeckList.length == 30){ 
      return;
    }
    if(data['body'].length>1){
      for(var i = 0; i < data['body'].length;i++){
        if(data['body'][i]['collectible']){
          if(this.checkLegend(this.playerDeckList, data['body'][i])=="one"){
            return;
          }
          if(this.checkDoubles(this.playerDeckList, data['body'][i])=="two"){
            return;
          }
          this.playerDeckList.push(data['body'][i]);
          this.copyDeckList.push(data['body'][i]);
          
          this.updateManaList();
          let list = this.playerDeckList;
          this.formatList = this.formatDoubles(list);
          this.orderList(this.formatList);
          this.cardCostArray = [0, 0, 0, 0, 0, 0, 0, 0];
          this.countCost(this.manaCount);
         
          } 
        }
    } else {

      if(this.checkLegend(this.playerDeckList, data['body'][0])=="one"){
        return;
      }
      if(this.checkDoubles(this.playerDeckList, data['body'][0]) == "two"){
        return;
      }
      this.playerDeckList.push(data['body'][0]);
      this.copyDeckList.push(data['body'][0])
      
      let list = this.playerDeckList;
      this.formatList = this.formatDoubles(list);
      this.orderList(this.formatList);
      this.updateManaList();
      console.log("here here here", this.manaCount)
      this.cardCostArray=[0,0,0,0,0,0,0,0];
      this.countCost(this.manaCount);
      console.log("after", this.cardCostArray)
  
    }
  }

  updateManaList(){
    
    let list = this.copyDeckList;
    let arr = [];
    let sum = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i]['collectible']) {
        arr.push(list[i]['cost']);
        sum += list[i]['cost'];
      }
      this.avgCost = Math.ceil(sum/list.length*10)/10;
      this.manaCount = arr;
      }
    
    }

    checkDoubles(list, card){
      let count = 1;
      for(var i = 0; i < list.length; i++){
        if('2X '+card['name'] == list[i]['name']){
          return "two";
        }
        if(card['name'] == list[i]['name']){
          count += 1;
          if(count == 3){
            return "two";
          }
        }
      }
    }
    checkLegend(list, card){
      let count = 1;
      for(var i = 0; i < list.length; i++){
        if(card['rarity'] == 'Legendary' && card['name']==list[i]['name']){
          count = 2;
          if(count == 2){
            return "one";
          }
        }
      }
    }

  formatDoubles(f) {
      for (var i = 0; i < f.length; i++) {
        for (var j = i+1; j < f.length; j++) {
          if (f[i]['name'] == f[j]['name']) {
            f[i]['name'] = "2X" + " " + f[i]['name'];
            f.splice(j,1);
          }
        }
      }
      return f;

  }

  orderList(list){
    for(var i = 0; i < list.length; i++){
      var temp = list[i];
      var j = i -1;
      while(j>=0 && list[j]['cost'] > temp['cost']){
        list[j+1] = list[j];
        j--;
      }
      list[j+1] = temp;
    }
    return list;
  }
  
  countCost(arr){
    console.log("in count Coust",arr)
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] == 0) {
        this.cardCostArray[0] += 1;
      }
      if (arr[x] == 1) {
        this.cardCostArray[1] += 1;
      }
      if (arr[x] == 2) {
        this.cardCostArray[2] += 1;
      }
      if (arr[x] == 3) {
        this.cardCostArray[3] += 1;
      }
      if (arr[x] == 4) {
        this.cardCostArray[4] += 1;
      }
      if (arr[x] == 5) {
        this.cardCostArray[5] += 1;
      }
      if (arr[x] == 6) {
        this.cardCostArray[6] += 1;
      }
      if (arr[x] >= 7) {
        this.cardCostArray[7] += 1;
      }
    }
  }
}



