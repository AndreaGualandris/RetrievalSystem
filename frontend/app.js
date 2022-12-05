const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const multer = require('multer');
const axios = require('axios')

const fs = require('fs-extra');

//init framework
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


//fetch with axios to http://localhost:8983/solr/Houses_collection/select? and construct the query for solr
app.get('/search', (req, res) => {
  const query = req.query.query;

  // const url = `http://localhost:8983/solr/Houses_collection/search/`;

 axios({
  method: 'get',
  url: `http://localhost:8983/solr/Houses_collection/query?qf=title^3.0+beds^1.5+address^2.0+price^1.0&indent=true&q.op=AND&q=*${query}*&defType=edismax`
 }).then((response) => {
    console.log(response.data.response.docs);
    // res.render('search-result', {"query_results": response.data.response.docs})
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


