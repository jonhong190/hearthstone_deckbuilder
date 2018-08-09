const mongoose = require('mongoose');


const CardSchema = new mongoose.Schema({
    card_name: String,
    card_image:String

})
mongoose.model('Card', CardSchema);

const DeckSchema = new mongoose.Schema({
    title: { type: String, maxlength: [25, "Deck name can only be 25 characters max"] },
    class:String,
    cards: [CardSchema]
})
mongoose.model('Deck', DeckSchema);

const UserSchema = new mongoose.Schema({
    first_name:{type:String, minlength:[3, "First name must be at least 3 characters"]},
    last_name:{type:String, minlength:[3 , "Last name must be at least 3 characters"]},
    email:String,
    password:{type:String ,minlength:[8,"Password must be at least 8 characters"]},
    decks:[DeckSchema]
})
mongoose.model('User', UserSchema);