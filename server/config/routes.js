const mongoose = require('mongoose');
const users = require('..//controllers/users.js');
const decks = require('..//controllers/decks.js');
const path = require('path')
var unirest = require('unirest');

module.exports= (app)=>{
    app.get("/user", (req,res)=>{
        users.allUsers(req,res);
    })
    app.get("/user/:id", (req,res)=>{
        users.getOneUser(req,res);
    })
    app.post("/user/new",(req,res)=>{
        users.createUser(req,res);
    })
    app.post("/user/:id/deck/new",(req,res)=>{
        users.addDeck(req,res);
    })
    app.get("/user/:id/deck/:deck_id/remove", (req,res)=>{
        users.removeDeck(req,res);
    })
    app.post("/user/:id/deck/:deck_id/card/new",(req,res)=>{
        users.addCard(req,res);
    })
    app.get("/user/:id/deck/:deck_id/remove/:card_id", (req,res)=>{
        users.removeCard(req,res);
    })
    app.get("/login/:email", (req,res)=>{
        users.loginUser(req,res);
    })



    app.get('/cards',(req,res)=>{
        unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards").header("X-Mashape-Key", "Fp52mdBXd5mshRlMdcYxniWMugBdp1bccqTjsnOOsmyXLr6Pp1").end((result)=>{
            console.log(result.status, result.headers,result.body)
            res.send({message:"succes",data:result});
        })
    })

    app.get('/cards/info',(req,res)=>{
        unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/info")
            .header("X-Mashape-Key", "Fp52mdBXd5mshRlMdcYxniWMugBdp1bccqTjsnOOsmyXLr6Pp1").header("Accept","application/json").end((result)=>{
                res.send({message:"success", data:result})
            })
    })

    app.get('/cards/:name', (req,res)=>{
        unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/"+req.params.name)
            .header("X-Mashape-Key", "Fp52mdBXd5mshRlMdcYxniWMugBdp1bccqTjsnOOsmyXLr6Pp1")
            .end((result)=>{
                res.send({message:'success', data:result});
            })
    })
   
    app.get('/neutral',(req,res)=>{
        unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/Minion")
            .header("X-Mashape-Key", "Fp52mdBXd5mshRlMdcYxniWMugBdp1bccqTjsnOOsmyXLr6Pp1").end((result)=>{
                res.send({message:'success', data:result});
            })
    })

    app.get('/card/:name',(req,res)=>{
        unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/"+req.params.name)
            .header("X-Mashape-Key", "Fp52mdBXd5mshRlMdcYxniWMugBdp1bccqTjsnOOsmyXLr6Pp1").end((result)=>{
                res.send({message:'success', data:result});
            })
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}

