var express = require('express');
var router = express.Router();

 var cityList = [
  {name:'Paris',desc:"couvert",img:'./images/picto-1.png',temp_min : 18,temp_max : 24},
  {name:'Lyon',desc:'soleil', img: './images/picto-1.png',temp_min : 14,temp_max : 24},
  {name:'Marseille',desc:'nuageux',img:'./images/picto-1.png',temp_min: 0,temp_max:30},
 ];


router.get('/', function(req, res, next) {
  res.render('index', {cityList});
});

router.post('/add-city', function(req, res, next) {
    console.log("CITY PUSH HANDLED! ----> ", req.body.addedCityFromFront)
    // cityList.push(
    //   {
    //     name: name
  
    //   }
    // )
    res.render('index', { cityList});
  });


  router.get ('/delete-city',function (req, res, next){

    console.log("CITY DELATE ----->",req.query.position)
    cityList.slice(req.query.position,1)
  
  res.render('index', {cityList
});
  
  
 });
  


module.exports = router;
