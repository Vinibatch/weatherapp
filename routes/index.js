var express = require('express');
var router = express.Router();
var request = require('request');

 var cityList = [
//   {name:'Paris',desc:"couvert",img:'./images/picto-1.png',temp_min : 18,temp_max : 24},
//   {name:'Lyon',desc:'soleil', img: './images/picto-1.png',temp_min : 14,temp_max : 24},
//   {name:'Marseille',desc:'nuageux',img:'./images/picto-1.png',temp_min: 0,temp_max:30},
 ];


router.get('/', function(req, res, next) {
  res.render('index', {cityList});
});

router.post('/add-city', function(req, res, next) {
    console.log("CITY PUSH HANDLED! ----> ", req.body.addedCityFromFront)
   request(' http://api.openweathermap.org/data/2.5/weather?q='+req.body.addedCityFromFront+'&appid=f559102f7a2b5841d48a199d217b7aa8',function (error,response,body){
    body=JSON.parse(body);
    console.log("body",body);

    cityList.push({
    name: body.name,
    desc:body.weather[0].description,
    img: 'http://openweathermap.org/img/w/'+body.weather[0].icon+'.png',
    temp_min:body.main.temp_min,
    tem_max:body.main.tem_max

    })
  
             res.render('index', { cityList});

        });
  });


  router.get ('/delete-city',function (req, res, next){

    console.log("CITY DELATE ----->",req.query.position)
    cityList.slice(req.query.position,1)
  
  res.render('index', {cityList
});
  
  
 });
  


module.exports = router;
