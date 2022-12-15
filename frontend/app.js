const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const multer = require('multer');
const axios = require('axios')

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(express.json({ limit: '4MB' }));    // parse application/json
app.use(multer().none());   //parse multipart/form-data

app.use(express.static(path.join(__dirname, 'public'), { index: "index.html" }));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

const ejsc = require('ejsc-views');
ejsc.compile();


app.get('/search', (req, res) => {
  const query = req.query.query;

 axios({
  method: 'get',
  url: `http://localhost:8983/solr/houses/query?qf=title^2.5+beds^2.0+address^1.5+price^1.0&rows=50&indent=true&q.op=AND&q=*${query}*&defType=edismax`
 }).then((response) => {
    // console.log(response.data.response.docs);
    res.status(200).json(response.data.response.docs)
 })
});


app.get('/clustering', (req, res) => {
  const query = req.query.query;
  const field = req.query.field; //richiedre il campo da filtrare tramite menu a tendina

 axios({
  method: 'get',
  url: `http://localhost:8983/solr/houses/select?q=${query}&facet=true&facet.field=title` //cercare di aggiungere il copy field per il clustering altrimenti sticazzi proviamo come sotto


 }).then((response) => {
    // console.log(response.data.response.docs);
    res.status(200).json(response.data.response.docs)
 })
});


app.get('/similar', (req, res) =>{

  const query = req.query.query;
  const qf = "city+state+price+beds" //campi sul quale voglio che siano simili 
  const id = req.query.id; //id del documento che voglio filtrare
const fl = "city+state+price+beds"
  axios({
    method: 'get',
    url: `http://localhost:8983/solr/houses/query?q={!mlt qf=${qf} fl=${fl} mintf=1 mindf=1}${id}`
  }).then((response) => {
    // console.log(response.data.response.docs);
    res.status(200).json(response.data.response.docs)
})
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//start server
app.set('port', process.env.PORT || 8888);

var server = require('http').createServer(app);

server.on('listening', function () {
  console.log('Express server listening on port ' + server.address().port);
});

server.listen(app.get('port'));


