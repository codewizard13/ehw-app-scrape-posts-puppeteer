/*
Project Name:   EHW APP: App: Scrape Blog Posts with Puppet
Date Created:   12/31/22
Programmer:     Eric L. Hepperle

File Version:    1.00.00
*/

/* _____________ VARIABLES __________________ */


/* _____________ ALGORITHM __________________ */

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

  const photos = await page.$$eval("img", imgs => {
    return imgs.map(x => x.src)
  })
  
  // for-of allows for await syntax
  for (const photo of photos) {
    const imagepage = await page.goto(photo)
    await fs.writeFile(photo.split('/').pop(), await imagepage.buffer())
  }



  await browser.close()
}
start()