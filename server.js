const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('src'));

app.listen(port, ()=> {
  console.log('Express server has stared up.');
});