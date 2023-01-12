const request = require ('request')
const cheerio = require('cheerio')

const URL_SAMPLE_WORD = "https://www.elijahlist.com/words/display_word.html?ID=28023"

const targetURL = `https://erichepperle.com`
request(targetURL, (error, response, html) => {
  if (!error && response.statusCode == 200) {

    const $ = cheerio.load(html)

    const siteHeading = $('#word-truncate')

    console.log(siteHeading.length)

  }
})