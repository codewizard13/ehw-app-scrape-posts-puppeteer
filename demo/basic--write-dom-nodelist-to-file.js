/*
Purpose:        DEMO: How to Write Array DOM Element Values to File
Date Created:   12/31/22
Programmer:     Eric L. Hepperle
*/

const Puppeteer = require('puppeteer')
const fs = require('fs/promises') // we don't have to write messy callback code

async function start() {

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://learnwebcode.github.io/practice-requests/')

  const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.info strong')).map(x => x.textContent)
  })

  await fs.writeFile('names.txt', names.join('\n'))



  await browser.close()
}
start()