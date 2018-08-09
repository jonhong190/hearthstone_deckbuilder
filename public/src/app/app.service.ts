import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user :any;
  constructor(private _http:HttpClient) { }


  getAllCards(){
    return this._http.get('/cards');
  }

  getAllCardInfo(){
    return this._http.get('/cards/info');
  }
  loginUser(user){
    return this._http.get('/login/'+user.email);
  }
  getClassCards(name){
    return this._http.get('/cards/'+name);
  }
  checkUrl(url){
    return this._http.get(url);
  }
  getNeutralCards(){
    return this._http.get('/neutral');
  }

  getOneCard(name){
    return this._http.get('/card/'+name);
  }

  createUser(user){
    return this._http.post('/user/new', user);
  }
  getOneUser(user){
    return this._http.get('/user/'+user._id);
  }

  addDeck(user,deck){
    return this._http.post('/user/'+user._id+'/deck/new', deck);
  }
  deleteDeck(user, deckId){
    return this._http.get('/user/'+user._id+'/deck/'+deckId+'/remove');
  }
}