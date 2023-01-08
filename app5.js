/*
Project Name:   EHW APP:  Scrape Local HTML File
Date Created:   12/31/22
Date Modified:  01/08/22
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
  filepath = `${LOC_PATH}/elijahWordSample.htm`
  console.log(filepath)

  getContentInfo(filepath)

}


function getContentInfo(filePath) {

  // Store local html file to be parsed
  const file = fs.readFileSync(filePath).toString()
  const $ = cheerio.load(file); // USE Cheerio like jQuery
  
  
    // Get title
    let title = $('title').text()
    console.log({ title })
  
    console.log(`\n${CONSTANTS.horzrule}\n`)
  
    // Steve's summary before the actual Word
    const startEl = $("p:contains('From the Desks of')")
    
    // console.log(startEl)
    const afterPreamble = startEl[0]
  
    let outval = startEl[0].parent.name // parent tag name
    outval = startEl[0].nextSibling
  
  
  
  
    const content = startEl[0]
  
    // content.each((i, el) => {
    //   console.table($(el))
    // })
  
    outval = content
    console.log(outval)
  
  
  }



// function getContentInfo(filePath) {

// // Store local html file to be parsed
// const file = fs.readFileSync(filePath).toString()
// const $ = cheerio.load(file); // USE Cheerio like jQuery


//   // Get title
//   let title = $('title').text()
//   console.log({ title })

//   console.log(`\n${CONSTANTS.horzrule}\n`)

//   // Steve's summary before the actual Word
//   const startEl = $("p:contains('From the Desks of')")
  
//   // console.log(startEl)
//   const afterPreamble = startEl[0]

//   let outval = startEl[0].parent.name // parent tag name
//   outval = startEl[0].nextSibling




//   const content = startEl[0]

//   // content.each((i, el) => {
//   //   console.table($(el))
//   // })

//   outval = content
//   console.log(outval)


// }





















// Default is synchronous
function getTagsInfo(tagName) {
  console.log(`\n${CONSTANTS.horzrule}\n`)
  let tags = $(tagName)
  tags.each((_, e) => {
    let row = $(e)
    let attribs = row.attr()
    let content = row.html().split(';')
    console.log(`${tagName.toUpperCase()} tag attributes:`, attribs)
    console.table(attribs)
    console.log(`${tagName.toUpperCase()} tag inner content:`)
    // let parsedJSON = JSON.parse(content)
    // console.log(parsedJSON)
    // console.log(JSON.stringify(content), null, 4)
    console.log(content)
  })
}


async function getPageDataAsJSON(URL) { }



async function start() {

  const html = getLocalPage()

  // const html = await page.content()
  // console.log(html)
  const head = {}
  const body = {}

  // const title = html.querySelector('title')
  // console.log({title})





  // Save data to HTML file
  // fs.writeFile('sampleTarget.htm', html)
  // fs.writeFile('elijahWordSample.htm', html)




  // await browser.close()
}
start()
