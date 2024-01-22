const {
  By,
  Key,
  Builder
} = require("selenium-webdriver");
require("chromedriver")
const axios = require('axios');

//auth
const {
  twitterpass,
  twitteruser,
  linkvertisetext
} = require('./../auth/keys.json');

//modules
const {
  sendwebhook
} = require('./../modules/webhook.js');
const {
  delay
} = require('./../modules/delay.js');
