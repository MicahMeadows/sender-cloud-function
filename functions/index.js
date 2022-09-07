const functions = require("firebase-functions");
const api_module = require('./sender-api/app');

const app = api_module.app;

exports.app = functions.https.onRequest(app);