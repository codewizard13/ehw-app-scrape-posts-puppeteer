/*
Project Name:   EHW APP:  Scrape Local HTML File
Date Created:   12/31/22
Date Modified:  01/08/22
Programmer:     Eric L. Hepperle

PARSE LOCAL FILE FOR HTML

*/




const { filenameToLines, parseCSVToArray, testUrls, CONSTANTS } = require(`${__dirname}/common/io`)

const Puppeteer = require('puppeteer')
const cheerio = require('cheerio');

const fsp = require('fs/promises') // we don't have to write messy callback code
const fs = require('fs')
const { dirname } = require('path')

// Define local html file path
filePath = `${__dirname}/elijahWordSample.htm`
console.log({ filePath })

// Store local html file to be parse
const file = fs.readFileSync(filePath).toString()
const $ = cheerio.load(file);



// INACTIVE YET
async function getRemotePage() {

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(URL_WORD_LOC)

}


function getLocalPage() {


  // Get title
  let title = $('title').text()
  console.log({ title })

  // getTagsInfo('meta')
  // getTagsInfo('style')
  // getTagsInfo('script')
  // getTagsInfo('link')

  getContentInfo()





  // console.log({metas})
  // const metasOut = Array.from(Object.entries(metas)).forEach(tag => tag)
  // console.log(metasOut)

  return file

}


function getContentInfo() {
  console.log(`\n${CONSTANTS.horzrule}\n`)

  // Steve's summary before the actual Word
  const preambleStart = $("p:contains('From the Desks of')")
  // console.log(preambleStart)
  const afterPreamble = preambleStart[0]

  let outval = preambleStart[0].parent.name // parent tag name
  outval = preambleStart[0].nextSibling


  /*
  ALGORITHM:
  
  get parent of p tag starting with "From the Desks of" (parent)
  
  get inner html of parent.
  store in var (content)
  
  convert content to string
  split CONTENT_STR at "*************************************"
  
  
  
  */

  const content = preambleStart[0]

  // content.each((i, el) => {
  //   console.table($(el))
  // })

  outval = content
  console.log(outval)


}





















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
