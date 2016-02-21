var express = require('express');
var app = express();

app.get('/food', function (req, res) {
  // do biz logic
  // var kitty = new cat({})
  // kitty.save()
  var food_entry = new food{}
  food{
  	days,meals = []
  }



  // Cat.findById(id);
  // Cat.find({ name: "Kitt"}, function() {})
  res.send('Hello World!');
});

app.get('/prescription', function (req, res){

};



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});