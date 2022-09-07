const functions = require("firebase-functions");
const api_module = require('./sender-api/app');
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());


// app.get('/test', function (req, res) {
//   res.send('dope!');
// });

const app = api_module.app;

exports.app = functions.https.onRequest(app);