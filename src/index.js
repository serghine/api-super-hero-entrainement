const express=require('express');
const path=require('path');
const hbs=require('hbs');
const axios=require("axios");
const bodyParser = require('body-parser');




const app = express();
//rendre le dossier public static
app.use(express.static(path.join(__dirname,"../public")));
//hbs montrer le chemin  
app.set("view engine","hbs");
//utilisation partial
hbs.registerPartials(path.join(__dirname,'../views/partials'))
//
app.use(bodyParser.json())



app.get('/', function(req,res){
    
res.render('home');
})
app.get("/hero" , function(req,res){
   // console.log(req.query)
   const param=req.query;
        console.log(param);
        //url de lapi https://superheroapi.com/api/accessToken/
        return axios.get(`https://superheroapi.com/api/728755271297351/search/${param.search}`)
        .then(function(respense)
        {
            console.log(respense.data);
           return res.send(respense.data)
        }).catch(function(err)
        {
            console.log('err',err)
        })

    res.send({
        
        text:"server charger"
    });
})
app.post('/fight' ,function(req,res){
const bonyy=req.body;
console.log(bonyy);
    res.send({test:'message du serveur'});
})

const port=5000;

app.listen(5000, function(){
    console.log(`le server est charger sur http://localhost:${port}`);
})