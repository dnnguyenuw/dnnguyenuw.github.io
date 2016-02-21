var express = require('express');
var app = express();

app.get('/kitty', function (req, res) {
  // do biz logic
  // var kitty = new cat({})
  // kitty.save()


  // Cat.findById(id);
  // Cat.find({ name: "Kitt"}, function() {})
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});