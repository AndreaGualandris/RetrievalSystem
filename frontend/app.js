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
const console = require('console');
ejsc.compile();


app.get('/search', (req, res) => {
  const query = req.query.query;

  axios({
    method: 'get',
    url: `http://localhost:8983/solr/newHouses/query?qf=title^2.5+beds^2.0+address^1.5+price^1.0&rows=50&indent=true&q.op=AND&q=*${query}*&defType=edismax`
  }).then((response) => {
    // console.log(response.data.response.docs);
    res.status(200).json(response.data.response.docs)
  })
});


app.get('/clustering', (req, res) => {
  const query = req.query.query;

  axios({
    method: 'get',
    url: `http://localhost:8983/solr/newHouses/select?q=${query}&`


  }).then((response) => {
    // console.log(response.data.response.docs);
    res.status(200).json(response.data.response.docs)
  })
});


app.get('/similar', (req, res) => {

  const qf = "beds+address+price+state" 
  const id = req.query.id; 
  const fl = "beds+address+price+state"
  axios({
    method: 'get',
    url: `http://localhost:8983/solr/newHouses/query?q={!mlt qf=${qf} fl=${fl} mintf=1 mindf=1}${id}&rows=20`
  }).then((response) => {
    res.status(200).json(response.data.response.docs)
  }).catch((err) => {
    console.log(err)
    axios({
      method: 'get',
      url: `http://localhost:8983/solr/houses/query?q={!mlt qf=${qf} fl=${fl} mintf=1 mindf=1}${id}&rows=20`
    }).then((response) => {
      res.status(200).json(response.data.response.docs)
    })
  })
});


app.get('/cities', (req, res) => {
  axios({
    method: 'get',
    url: `http://localhost:8983/solr/newHouses/select?q=*:*&facet=true&facet.field=city`
  }).then((response) => {
    console.log(response.data.facet_counts.facet_fields.city);
    res.status(200).json(response.data.facet_counts.facet_fields.city)
  })
});


app.post('/filtering', (req, res) => {
  const obj = req.body;

  let filter_city, filter_state, filter_price, filter_beds = "";
  let filter = "";

  if (obj.city != ":") {
    filter_city = `fq=city:${obj.city}&`
    filter += filter_city;
  }
  if (obj.state != ":") {
    filter_state = `fq=state:${obj.state}&`
    filter += filter_state;
  }
  if (obj.price.max != ":") {
    filter_price = `fq=price:[ 0 TO ${obj.price.max}]&`
    filter += filter_price;
  }
  if (obj.beds != ":") {
    filter_beds = `fq=beds:${obj.beds}&`
    filter += filter_beds;
  }

  console.log(filter)
  const query = "*:*" //obj.query;
  if (obj.query != "") {
    query = obj.query;
  }
  console.log("query " + query)

  axios({
    method: 'get',
    url: `http://localhost:8983/solr/houses/select?qf=title&q=${query}&${filter}q.op=OR&rows=50&indent=true&defType=edismax`


  }).then((response) => {
    console.log(response.data.response);
    res.status(200).json(response.data.response.docs)
  })
    .catch((err) => {
      console.log(err);
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

