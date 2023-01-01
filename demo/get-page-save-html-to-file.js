/*
Purpose:        DEMO: How to Get Page Content HTML and Save to File
Date Created:   01/01/23
Programmer:     Eric L. Hepperle
*/

const Puppeteer = require('puppeteer')
const fs = require('fs/promises') // we don't have to write messy callback code

// SAMPLE URLS
const url_elijah = "https://www.elijahlist.com/words/index.html?page=3"
const URL_SAMPLE_WORD = "https://www.elijahlist.com/words/display_word.html?ID=28023"
const URL_EHW = "https://erichepperle.com"
const url_lwc = "https://learnwebcode.github.io/practice-requests/"


async function start() {

  // console.log(url_elijah)

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(URL_SAMPLE_WORD)

  const html = await page.content()
  console.log(html)
  
  // Save data to HTML file
  fs.writeFile('sampleTarget.htm', html)

  await browser.close()
}
start()