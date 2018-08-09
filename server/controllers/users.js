const mongoose = require('mongoose');
const User = mongoose.model('User');
const Deck = mongoose.model('Deck');
const Card = mongoose.model('Card');

function Users(){
    this.allUsers= (req, res)=>{
        User.find({}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    }

    this.createUser =(req,res)=>{
        let user = new User(req.body);
        user.save((err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                req.session.id = user._id;
                console.log(req.session.name)
                res.json({message:"success", data:data});
            }
        })
    }
    this.loginUser=(req,res)=>{
        console.log("in controller", req.body)
        User.find({email:req.params.email}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                res.json({message:"success", data:data})
            }
        })
    }
    this.getOneUser= (req,res)=>{
        User.find({_id:req.params.id}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err}); 
            } else {
                res.json({message:"success", data:data});
            }
        })
    }
    this.addDeck=(req,res)=>{
        let deck = new Deck(req.body);
        User.findOneAndUpdate({_id:req.params.id}, {$push:{decks:deck}},(err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    }

    this.removeDeck=(req,res)=>{
        User.find({_id:req.params.id}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                console.log("here",data)
                data[0].update({$pull:{decks:{_id:req.params.deck_id}}},(err, data)=>{
                    if(err){
                        res.json({message:"error", error:err});
                    } else {
                        res.json({message:"success", data:data});
                    }
                })
            }
        })
    }
    this.getOneDeck = (req,res)=>{
        User.find({_id:req.params.id},(err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                User.decks.find({_id:req.params.deck_id},(err,data)=>{
                    if(err){
                        res.json({message:"error", error:err});
                    } else {
                        res.json({message:"success", data:data});
                    }
                })
            }
        })
    }
    this.addCard=(req,res)=>{

        User.findOne({_id:req.params.id},(err,data)=>{
            if(err){
                res.json("error", err);
            } else {
                let deck = data.decks.id(req.params.deck_id);
                deck.cards.push(req.body);
                data.save();
                res.json({message:"success", data:data})
            }
        })
    }

    this.removeCard=(req,res)=>{
        console.log("HERHEJRHER")
        User.findOne({_id:req.params.id},(err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                let deck = data.decks.id(req.params.deck_id);
                let card = deck.cards.id(req.params.card_id);
                for(var i = 0; i <deck.cards.length; i++){
                    if(deck.cards[i]._id==card._id){
                        var temp = deck.cards[i];
                        deck.cards[i]=deck.cards[deck.cards.length-1];
                        deck.cards[deck.cards.length-1] = temp;
                        deck.cards.pop(-1);
                    }
                }
                data.save();
                res.json({message:"success", data:data})
            }
        })
    }


}

module.exports = new Users();