const express = require('express');


const app: any = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});


app.get('/', (req, res) => {
  res.send([{message: "hello world"}]);
});

app.listen(4201, "127.0.0.1",
  ()=>{
    console.log("Server now listening on 4201");
  });

