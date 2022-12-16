const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json({ limit: "4MB" })); // parse application/json
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

///////////////////////////////////////////////
/////////////       ROUTES       //////////////
///////////////////////////////////////////////


app.post("/info", (req, res) => {

  let info = req.body.info;
  let facetField = `facet.field=`
  let facet = ""
  info.split(" ").forEach(key => {
      facet += `&${facetField}${key}`
  })
  console.log("facet to search ", facet)

  const url = `http://localhost:8983/solr/drip/select?${facet}&facet=true&indent=true&q.op=OR&q=%3A&rows=10&start=10`;
  axios.get(url)
      .then(response => {
        console.log("////////////////  [FACET]:\n ", JSON.stringify(response.data.facet_counts.facet_fields))
        res.status(200).json(response.data.facet_counts.facet_fields)
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      })
})
app.post("/search", (req, res) => {
  console.log("request body: "+ JSON.stringify(req.body));
  let q = req.body.q || ":";

//   let body = {
//     q: q,
//     qf: "title^3.0 category^3.0 description^1.5 color^0.5",
//     defType: "edismax",
//     mm: "2",
//   };

  let qf = "title^3.0+category^3.0+description^1.5+color^0.5";
  let defType = "edismax";
  let mm = "2";

  let category = req.body.categories;
  let brand = req.body.brand;
  let fqCat = `&fq=:`;
  let fqBrand = `&fq=:`;

    if (category) {
        // fq=(category:hats OR category:jackets)
        fqCat = "&fq=("
        if (category.split(" ").length > 1) {
            category.split(" ").forEach(key => {
                fqCat += `category:${key} OR `
            })
            fqCat = fqCat.slice(0, -4) + ")"
        } else {
            fqCat = `&fq=category:${category}`;
        }
    }

  if (brand) {
      // fq=brand:evisu&fq=brand:nike
      if (brand.split(" ").length > 1) {
          fqBrand = "&fq=";
          brand.split(" ").forEach(key => {
              fqBrand += `brand:${key} `
          })
          fqBrand = fqBrand.trim();
      } else {
          fqBrand = `&fq=brand:${brand}`;
      }
  }

  let page = (req.body.p - 1) * 20 || 0;

  console.log("[ SEARCHING ] page: ", page)
  let reqUrl = `http://localhost:8983/solr/drip/query?q=${q}&qf=${qf}&defType=${defType}&mm=${mm}${fqCat}${fqBrand}&rows=20&start=${page}`;
    console.log("[SOLAR query call]: ", reqUrl)

  axios({
    method: "get",
    url: reqUrl,
    // headers: {},
    // data: body,
  })
    .then((response) => {
      console.log("response: ", response.data);
      res.status(200).json(response.data.response);
    })
    .catch((error) => {
      console.log("error: ", error);
      res.status(500).send("error");
    });
});


app.post("/moreLikeThis", (req, res) => {
    console.log("request body: "+ req.body);
    const id = req.body.id || ":";

    let qf = "description+title+color";
    let defType = "edismax";
    let mm = "2";

    axios({
        method: "get",
        url: `http://localhost:8983/solr/drip/query?q={!mlt qf=${qf} mintf=1 mindf=1}${id}`,
    })
        .then((response) => {
        console.log("response: ", response.data);
        res.status(200).json(response.data.response.docs);
        })
        .catch((error) => {
        console.log("error: ", error);
        res.status(500).send("error");
        });
});
///////////////////////////////////////////////
////////////     END ROUTES       /////////////
///////////////////////////////////////////////

// listener for
app.set("port", process.env.PORT || 8888);

var server = require("http").createServer(app);

server.on("listening", function () {
  console.log("Express server listening on port " + server.address().port);
});

server.listen(app.get("port"));