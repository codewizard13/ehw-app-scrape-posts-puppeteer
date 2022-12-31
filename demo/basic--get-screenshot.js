/*
Purpose:        DEMO: How to Get Simple Screenshot with Puppeteer
Date Created:   12/31/22
Programmer:     Eric L. Hepperle
*/

const Puppeteer = require('puppeteer')

async function start() {

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://learnwebcode.github.io/practice-requests/')
  await page.screenshot({path: "amazing.png"})

  await browser.close()
}
start()