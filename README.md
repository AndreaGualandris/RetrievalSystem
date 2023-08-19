# RetrievalSystem
Prototype of an information retrieval system for a specific task and user needs. 

Web-based application that allows users to search for homes. It is built with Node.js, Express.js and EJS for server side rendering. The house data was recovered by scraping websites with scrapy. Search functionality has been integrated with Solr to handle HTTP requests and return the most relevant data based on queries.

# To run Solr:
inside folder: /solr-9.0.0,
run command: bin/solr start -e cloud 

# To stop Solr: 
run bin/solr stop -all

# To run server:
inside folder: /frontend
run command: yarn start

go on http://localhost:8888/
