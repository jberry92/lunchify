'use strict'

const express = require('express')
const path = require('path')
const router = require('./config/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
var port = process.env.PORT || 1728;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bodyParser.json())
app.use(router);

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(port, ()=> {
  console.log('Listening on port: $' + port);
})
