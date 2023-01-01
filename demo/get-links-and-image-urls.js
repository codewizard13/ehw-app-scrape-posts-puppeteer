/*
Project Name:   EHW APP: App: Scrape Blog Posts with Puppet
Date Created:   12/31/22
Programmer:     Eric L. Hepperle

TESTING grabbing url list from 
https://www.elijahlist.com/words/index.html?page=3

File Version:    4
*/

/* _____________ VARIABLES __________________ */


/* _____________ ALGORITHM __________________ */

const Puppeteer = require('puppeteer')
const fs = require('fs/promises') // we don't have to write messy callback code

const url_elijah = "https://www.elijahlist.com/words/index.html?page=3"
const url_lwc = "https://learnwebcode.github.io/practice-requests/"
const targetSelector = 'nav[aria-label="Page navigation"]:first-of-type + div > a'


async function start() {
  console.log(url_elijah)

  const browser = await Puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url_elijah)

  const photos = await page.$$eval("img", (imgs) => {

    return imgs.map(x => x.src)

  })

  console.table(photos)

  const links = await page.$$eval("a", (urls) => {
    return urls.map(x => x.href)
  })

  console.table(links)

  await browser.close()
}
start()