var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Benjamin dubya' });
});

router.get('/about', function(req,res, next){
   var self = {
        name: 'ben',
        phone: '222-222-2222',
        email: 'benmw2@gmail.com'
   }
   //response.render()
   //1st: template(view)
   //2nd: an object with data

   res.render('about', self);
});

router.get('/faq', function(req,res,next){
    var questions = {
        questions: ['i can has cookie?','waddup?'],
        answer: ['yaas', 'namuch']
    }
    res.render('faq', questions);
});

router.get('/login', function(req,res,next){
    var user = {
        //name: 'jim',
        password: 'banjo',
        hint: 'strovia'
    }
    res.render('login', user);
});

module.exports = router;
