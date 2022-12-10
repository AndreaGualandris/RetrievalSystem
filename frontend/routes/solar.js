
const express = require('express');
const axios = require('axios');
const router = express.Router()
module.exports = router;



//fetch with axios to http://localhost:8983/solr/Houses_collection/select? and construct the query for solr
router.get('/search', (req, res) => {
    const query = req.query.q;

    const url = `http://localhost:8983/solr/Houses_collection/select`;

    //prepare the query for solr
    const solrQuery = {
        q: query,
        wt: 'json',
        indent: true,
        rows: 100
    };

    axios.get(url, { params: solrQuery })
        .then(response => {
            res.json(response.data);
        }
        )
});