const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver")
const axios = require('axios');

//json shit
const { misc, users } = require('./../auth/keys.json');
const { webhookurl, linktext } = misc;
const { twitteruser, twitterpass } = users[0]; // change `[0]` to accid in json 

//modules
const { sendwebhook } = require('../modules/webhook.js');
const { delay } = require('../modules/delay.js');

var event = new Date();


async function test_case() {
  await console.log('Session started at ' + event.toLocaleString('en-GB', {
    timeZone: 'Europe/London'
  }));

  await sendwebhook(webhookurl, 'Session started at ' + event.toLocaleString('en-GB', {
    timeZone: 'Europe/London'
  }))

  let driver = await new Builder().forBrowser("chrome").build()
  //set window size 1920x1080
  await driver.manage().window().setRect({ width: 1920, height: 1080 });

  await driver.get("https://twitter.com/home?lang=en"); // open twitter
  await delay(1500);
  //clicks the "sign in" button
  await driver.findElement(By.xpath(`//*[@id="react-root"]/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[5]/a`)).click();
  await delay(2050);
  //clicks on the "Phone, email adress, or username" form and enters username
  await driver.findElement(By.className("css-175oi2r r-1roi411 r-z2wwpe r-rs99b7 r-18u37iz")).sendKeys(twitteruser);
  await delay(500);
  //click the "next" button on the login page
  await driver.findElement(By.xpath(`//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]`)).click();
  await delay(2050);
  //enter password
  await driver.findElement(By.xpath(`//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[3]/div/label`)).sendKeys(twitterpass);
  await delay(500);
  //click the login button
  await driver.findElement(By.xpath(`//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div`)).click();
  await sendwebhook(webhookurl, 'Logged in ✅');
  await delay(2000);
  //opens twitter #tag page
  await driver.get('https://twitter.com/search?q=%taghere&src=typed_query');
  await delay(500);
  
//time in milliseconds till chrome window closes
  setInterval(function () {
    driver.quit();
  }, 1000000000);
}

test_case();
