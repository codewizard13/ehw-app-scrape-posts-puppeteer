/*
Project Name:   EHW APP:  Scrape Local HTML File
Date Created:   12/31/22
Date Modified:  01/11/22
Programmer:     Eric L. Hepperle

PARSE LOCAL FILE FOR HTML

*/

// REQUIRE my library
const { filenameToLines, parseCSVToArray, testUrls, CONSTANTS } = require(`${__dirname}/common/io`)

// REQUIRE scraping and parsing packages
const Puppeteer = require('puppeteer')
const cheerio = require('cheerio');

const fsp = require('fs/promises') // we don't have to write messy callback code
const fs = require('fs')
const { dirname } = require('path')

// Define local html file folder location
const LOC_PATH = `${__dirname}/locfiles`


// This is the "main" function
function getLocalPage() {

  // Define local html file path
  filepath = `${LOC_PATH}/sample_01.htm`

  console.log(getLocalContentInfo(filepath))

}

/**
 * 
 * @param {string} filePath
 * @return {object} outObj
 */
function getLocalContentInfo(filePath) {

  // Print horizontal rule to break up code runs
  console.log(`\n\n\n****************************\n`)

  // Define object to store parsed html page values
  const outObj = {
    head: {
      title: '',
      meta: [],
      style: [],
      script: [],
      link: []
    },
    body: {
      preamble: '',
      word: ''
    }
  }

  // Store local html file to be parsed
  const file = fs.readFileSync(filePath).toString()
  const $ = cheerio.load(file); // USE Cheerio like jQuery

  const metaTags = getTagsInfo($, 'meta')
  const styleTags = getTagsInfo($, 'style')
  const scriptTags = getTagsInfo($, 'script')
  const linkTags = getTagsInfo($, 'link')


  // Store page values
  outObj.head.title = $('title').text()
  outObj.body.content = $('body').html().length
  outObj.head.meta = metaTags
  outObj.head.meta = styleTags
  outObj.head.meta = scriptTags
  outObj.head.meta = linkTags

  // if there is a desk_shultz class element
  let selectorDesk = $('.desk_shultz')
  if (selectorDesk) {
    let [preamble, word] = $('body').html().split(selectorDesk)
    outObj.body.preamble = preamble.length
    outObj.body.word = word.length
  }

  // Steve's summary before the actual Word
  const startEl = $("p:contains('From the Desks of')")

  // console.log(startEl)
  const afterPreamble = startEl[0]

  let outval = startEl[0].parent.name // parent tag name
  outval = startEl[0].nextSibling

  return outObj

}


async function start() {

  const html = getLocalPage()
}

start()




// Default is synchronous
function getTagsInfo($, tagName) {
  console.log(`\n${CONSTANTS.horzrule}\n`)
  let tags = $(tagName)
  tags.each((_, e) => {
    let row = $(e)
    let attribs = row.attr()
    let content = row.html().split(';')
    return content
  })
}