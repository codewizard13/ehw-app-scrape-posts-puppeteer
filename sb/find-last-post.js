/*

identify the very last post in a set of posts with numeric sequential ids

*/

const puppeteer = require('puppeteer')
const fs = require('fs/promises')

// const targetURL = "https://www.elijahlist.com/words/display_word.html?ID=28023"

const urlPrefix = "https://www.elijahlist.com/words/display_word.html?ID="

async function getLastPost(urlPrefix, startID = 0) {

  // Create page var with Puppeteer
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  let id = startID
  // let targetURL = urlPrefix + id
  // await page.goto(targetURL)

  // // Get page title
  // const title = await page.title()

  let invalidID = false
  while (!invalidID) {
    // DO STUFF

    // Define current url
    const pageUrl = urlPrefix + id
    // Get data from url
    await page.goto(pageUrl)

    const title = await page.title()


    if (title === '') {
      invalidID = true
    }
    else {
      // Print ID  and title
      const literal = `
--- --- --- --- ---
${id} | ${title}
      `
      console.log(literal)

      try {
        const content = await page.evaluate(() => {
          return document.querySelector('#word-truncate').textContent
        })
        const excerpt = content.trim().slice(0, 175)
        console.log(`Excerpt: ${excerpt}\n`)
      } catch {}
      // console.log(`${id} | ${title}`)
      // Increment ID by one
      id++

    }



  }

  // console.log({ targetURL })
  // console.log({ title })

  await browser.close()

}
getLastPost(urlPrefix, 28000)



// async function start() {
//   const browser = await puppeteer.launch()

//   const page = await browser.newPage()

//   await page.goto(targetURL)

//   // await page.screenshot({path: "screenshot.png"})

//   const names = await page.evaluate(() => {
//     return document.querySelector('#word-truncate').textContent
//   })
//   await fs.writeFile('word-truncate.txt', names)


//   await browser.close()
// }

// start()