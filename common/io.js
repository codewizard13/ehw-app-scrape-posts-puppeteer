const fs = require("fs");
const path = require('path')
// CSV parsing library
const Papa = require("papaparse");

/// FUNCTIONS ///

/**
 * Return lines array from file
 * $
 * @args: {string} filename
 * @return: {array} lines
 */
function filenameToLines(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const lines = fileStr.split('\n') // make array

  return lines

}


/**
 * 
 * @param {string} filepath 
 * @returns {array} objArr: array of row objects
 */
function parseCSVToArray(filepath) {

  const CSV_STRING = fs.readFileSync(filepath).toString()

  const result = Papa.parse(CSV_STRING, { header: true });
  const objArr = result.data

  return objArr
}


function replaceBackslash(string) {

  const replaced = string.replace(/\//g, ' ');
  console.log(replaced);

}

// const URL_WORD_LOC = __dirname + "/elijahWordSample.htm"
// const URL_WORD_LOC = 'file://' + "/elijahWordSample.htm"
// const URL_WORD_LOC = dirname("/elijahWordSample.htm") + "/elijahWordSample.htm"
// const URL_WORD_LOC = replaceBackslash( __dirname )
// `${__dirname}/../../../docs/sowpods.txt`

const CONSTANTS = {
  horzrule: "*".repeat(30)

}

const testUrls = {
  list: "https://www.elijahlist.com/words/index.html?page=3",
  word: "https://www.elijahlist.com/words/display_word.html?ID=28023",
  ehw: "https://erichepperle.com",
  lwc: "https://learnwebcode.github.io/practice-requests/"
}

targetSelector = 'nav[aria-label="Page navigation"]:first-of-type + div > a'


module.exports = {
  filenameToLines: filenameToLines,
  parseCSVToArray: parseCSVToArray,
  testUrls: testUrls,
  CONSTANTS
}