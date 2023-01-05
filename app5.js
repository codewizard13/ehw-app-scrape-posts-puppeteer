/*
Project Name:   EHW APP: App: Scrape Blog Posts with Puppet
Date Created:   12/31/22
Programmer:     Eric L. Hepperle

TESTING grabbing url list from 
https://www.elijahlist.com/words/index.html?page=3

File Version:    4

RESOURCES:
- https://www.youtube.com/watch?v=lgyszZhAZOI
- https://www.youtube.com/watch?v=S67gyqnYHmI
*/



/*

ALGORITHM:

REQUIRE puppeteer and define (Puppeteer)
REQUIRE nodejs file system promises module
REQUIRE dirname command from path module

DEFINE url to search as one containing "display_word" and an ID number (TARGET_URL)

// FUNCTION: getPageDataAsJSON() ASYNC
DEFINE browser const as await Puppeteer.launch()
DEFINE page const as await browser.newPage()
AWAIT page.goto(TARGET_URL)

DEFINE data object as having
  EMPTY head object
  EMPTY body object



*/




const Puppeteer = require('puppeteer')
const fs = require('fs/promises') // we don't have to write messy callback code
const { dirname } = require('path')

// const URL_WORD_LOC = __dirname + "/elijahWordSample.htm"
// const URL_WORD_LOC = 'file://' + "/elijahWordSample.htm"
// const URL_WORD_LOC = dirname("/elijahWordSample.htm") + "/elijahWordSample.htm"
const URL_WORD_LOC = replaceBackslash( __dirname )
// `${__dirname}/../../../docs/sowpods.txt`

const url_elijah = "https://www.elijahlist.com/words/index.html?page=3"
const URL_SAMPLE_WORD = "https://www.elijahlist.com/words/display_word.html?ID=28023"
const URL_EHW = "https://erichepperle.com"
const url_lwc = "https://learnwebcode.github.io/practice-requests/"
const targetSelector = 'nav[aria-label="Page navigation"]:first-of-type + div > a'


async function start() {

  console.log(URL_WORD_LOC)
  replaceBackslash(URL_WORD_LOC)

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(URL_WORD_LOC)

  // const html = await page.content()
  // console.log(html)
  const head = {}
  const body = {}

  const title = await page.evaluate(() => document.title)
  console.log(head)
  head.title = title

  // const title = await page.evaluate(() => document.title)
  // const title = await page.evaluate(() => document.title)
  // const title = await page.evaluate(() => document.title)
  // const title = await page.evaluate(() => document.title)
  console.log(head)


  // Save data to HTML file
  // fs.writeFile('sampleTarget.htm', html)
  // fs.writeFile('elijahWordSample.htm', html)




  await browser.close()
}
start()


function replaceBackslash(string) {

  const replaced = string.replace(/\//g, ' ');
console.log(replaced);

}