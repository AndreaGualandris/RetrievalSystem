// /**
//  * Web Atelier 2022  Exercise 6 - Persistent Web Apps and APIs with MongoDB
//  *
//  * Student: Alan Copa
//  *
//  * Task 1
//  *
//  */

// const mongodb = require('mongodb');



// //require framework and middleware dependencies
// const express = require('express');
// const path = require('path');
// const logger = require('morgan');
// const methodOverride = require('method-override');

// const fs = require('fs-extra');

// /* Quiz 1 */
// // Connection string to the database server address URL
// const mongodb_uri = 'mongodb://127.0.0.1:27017/';

// /* Task 4 */
// // const mongodb_uri = 'mongodb+srv://db_user:mF14Cac1Jfvg2wZz@cluster0.x6zd3.mongodb.net/Feedback?retryWrites=true&w=majority';

// /* Quiz 2 */
// // Create a mongodb client object to access 
// // the database server found at the given address
// const client = new mongodb.MongoClient(mongodb_uri);

// /* Quiz 3 */
// // Configure the database name
// const db_name = 'web-atelier-ex';

// /* Quiz 4 */
// // Configure the database collection names
// const collection_names = ['high_scores', 'typing_challenges'];

// /* Quiz 5 */
// // Initialize the object which will be exported from this module
// const model = {};

// console.log("Connecting to mongodb server");

// /* Quiz 6 */
// client
//     .connect() /* Quiz 7 */
//     .then(client => {
//         console.log("Connected to mongodb server: " + mongodb_uri);

//         /* Quiz 8 */
//         model.db = client.db(db_name);
//         collection_names.forEach(c=>{
//             /* Quiz 9 */
//             model[c] = model.db.collection(c);
//         })
//         // console.log(model);
//         // console.log(model.high_scores);
//         // console.log(model.typing_challenges);


//     }) /* Quiz 10 */
//     .catch(err => console.error(err));

// exports.model = model;