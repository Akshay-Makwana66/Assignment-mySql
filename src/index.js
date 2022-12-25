const express = require("express");
const multer = require('multer');
const route = require('./route/route');
const app = express();
app.use(express.json());
app.use(multer().any());

app.use('/',route)

app.listen( 3000,  ()=> {
    console.log("Express app running on port " + 3000);
  });

