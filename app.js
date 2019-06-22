const express = require('express');
const path = require('path');
const app = express();
PORT_NUM = 3000

// app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.static(__dirname + '/assets'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/views/index.html');
});
  
  app.listen(PORT_NUM, () =>
    console.log(`App is served at localhost: ${PORT_NUM}`),
  );