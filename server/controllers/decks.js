const mongoose = require("mongoose");
const Deck = mongoose.model('Deck');
const Card = mongoose.model('Card')

function Decks(){
    this.addCard=(req,res)=>{
        let card = new Card(req.body);
        let deck = Deck.find({_id:req.params.id}).cards;
        for(var i = 0; i < deck.length;i++){
            var count = 1;
            if(deck[i]==card){
                count +=1;
                if(count == 2){
                    res.json({message:"Deck already has 2 copies"});
                    break;
                }
            }
        }
        Deck.findOneAndUpdate({_id:req.params.deck_id},{$push:{cards:card}}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    }
    this.removeCard=(req,res)=>{
        let card = Card.find({_id:req.params.card_id});
        Deck.findOneAndUpdate({_id:req.params.deck_id}, {$pull:{cards:card}},(err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    }

}