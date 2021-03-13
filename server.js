const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');
//mongoose.connect('mongodb+srv://chami123:chami123@cluster0.9houf.mongodb.net/moviesDB?retryWrites=true&w=majority');

mongoose.connect('mongodb+srv://chami123:chami123@temperature.tomlr.mongodb.net/temperatura?retryWrites=true&w=majority')
     const rilevazioniSchema =    {
       //  title : String,
        // genere : String,
        // year : String
        temperarura : String,
        dataOra : Date 
     }         

const Movie = mongoose.model('rilevazioni_1',rilevazioniSchema)
app.get('/',(req,res)=> {
   Movie.find({},function(err,rilevazioni_1){
       res.render('index',{
           rilevazioniList: rilevazioni_1
       })
   })
   
})

app.listen(5000,function(){
    console.log('server is running');
})