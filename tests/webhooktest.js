const { sendwebhook } = require('./../modules/webhook.js');

var webhookurl = "XXX";
var content = "XXX";

sendwebhook(webhookurl, content);

//run `node webhooktest.js` in cmd
