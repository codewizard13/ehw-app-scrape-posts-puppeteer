/*
Project Name:   EHW APP: App: Scrape Blog Posts with Puppet
Date Created:   12/31/22
Programmer:     Eric L. Hepperle

File Version:    1.00.00
*/

/* _____________ VARIABLES __________________ */


/* _____________ ALGORITHM __________________ */

const Puppeteer = require('puppeteer')

async function start() {

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://learnwebcode.github.io/practice-requests/')
  await page.screenshot({path: "amazing2.png"})

  await browser.close()
}
start()