/*
Purpose:        DEMO: How to Write Array of Lines to File with FS
Date Created:   12/31/22
Programmer:     Eric L. Hepperle
*/

const fs = require('fs/promises') // we don't have to write messy callback code

async function start() {

  const names = ['red', 'green', 'blue']
  await fs.writeFile('names.txt', names.join('\n'))

}
start()