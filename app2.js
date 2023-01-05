/*
Project Name:   EHW APP: App: Scrape Blog Posts with Puppet
Date Created:   12/31/22
Programmer:     Eric L. Hepperle

TESTING grabbing url list from 
https://www.elijahlist.com/words/index.html?page=3

File Version:    1.00.00
*/

/* _____________ VARIABLES __________________ */


/* _____________ ALGORITHM __________________ */

const Puppeteer = require('puppeteer')
const fs = require('fs/promises') // we don't have to write messy callback code



async function start() {
  const targetURL = "https://www.elijahlist.com/words/index.html?page=3"
  // const targetDiv = `nav[aria-label="Page navigation"] + div`
  const targetSelector = 'nav[aria-label="Page navigation"]:first-of-type + div'
  console.log(targetSelector)

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(targetURL)



  const names = await page.evaluate(() => {
    return Array.from(
      document.querySelector(targetSelector)
        .map(x => x.textContent)
      )
  })

  await fs.writeFile('names.txt', names.join('\n'))

  // const photos = await page.$$eval("img", (imgs) => {
  //   return imgs.map(img => img.scr)
  // })

  // // for-of allows for await syntax
  // for (const photo of photos) {
  //   const imagepage = await page.goto(photo)
  //   await fs.writeFile(photo.split('/').pop(), await imagepage.buffer())
  // }



  await browser.close()
}
start()