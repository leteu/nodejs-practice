const { response } = require('express');
const express = require('express');
const app = express();

app.listen(8080, function() {
  console.log("listening on 8080")
});

app.get('/pet', function(request, response) {
  response.send('하하')
});