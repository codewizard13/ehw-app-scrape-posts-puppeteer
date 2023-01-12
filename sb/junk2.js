const puppeteer = require('puppeteer')
const fs = require ('fs/promises')

const targetURL = "https://www.elijahlist.com/words/display_word.html?ID=28023"

async function start() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto(targetURL)

  // await page.screenshot({path: "screenshot.png"})

  const names = await page.evaluate(() => {
    return document.querySelector('#word-truncate').textContent
  })
  await fs.writeFile('word-truncate.txt', names)


  await browser.close()
}

start()