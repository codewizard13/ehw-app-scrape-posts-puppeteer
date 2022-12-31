/*
Project Name:   EHW APP: Scrape LinkedIn Learning Course Chapter List
This Filename:  scrape-linkedin-chapters.js
Date Created:   11/03/22
Date Updated:   --
Programmer:     Eric L. Hepperle

File Version:    1.00.00

File Purpose:
  This ES6 JavaScript file contains the main "business logic" and primary
  mechanics of the current project. This project scrapes LinkedIn Learning
  course chapter/subchapters list from a LinkedIn Learning page. The data
  is then is formatted for markdown (.MD), chapter numbers added where
  missing, and subchapter numbers are added before being output to the console.

TAGS:   JavaScript, ES6, DOM Manipulation, App, Eric L. Hepperle, Eric Hepperle,
        console.log formatting

Usage:
  Navigate to any LinkedIn Learning course page and paste this code into the
  browser developer console and hit enter to run.

Sample results: 
--  

Requires:
  * Browser
  * LinkedIn Learning account
  * Logged into LinkedIn on a course page
  * #GOTCHA: You must manually open each chapter accordion
    
Demonstrates:
  * Vanilla JavaScript
  * JavaScript ES6 / ECMAScript2015
  * Web Scraping
  * DOM Traversal
  * Arrow Functions
*/

/* _____________ VARIABLES __________________ */

// Selector Variables

sel_chGroups = '.classroom-toc-section'
// sel_subchGroup = '.classroom-toc-section__items'
sel_subchapter = '.classroom-toc-item__title'

/* _____________ ALGORITHM __________________ */

/*

Find all chapter groups

Foreach chapter group

  Find chapter name. Print

  Find the subchapter group (UL?)
  
    Find all subchapter names. Print
    
*/

var colorChap = 'cadetblue'
var colorSubch = 'forestgreen'

var chStyle = `color: ${colorChap}; font-weight:bold`
var subStyle = `color: ${colorSubch}`

chGroups = document.querySelectorAll(sel_chGroups)

chGroups.forEach(function (chGroup, c) {
  
  ch_name = chGroup.querySelector('h2').innerText
  
  // Add numbers to chapter titles without numbers
  if (c === 0) {
    console.log(`%c### ${c}. ${ch_name}`, chStyle)
  } else if (c === chGroups.length-1) {
    console.log(`%c### ${chGroups.length-1}. ${ch_name}`, chStyle)    
  } else {
    console.log(`%c### ${ch_name}`, chStyle)
  }

  subchGroup = chGroup.querySelectorAll(sel_subchapter)

  
  subchGroup.forEach((subchapter, s) => {

    subchName = subchapter.firstChild.wholeText.trim()
    
    
    if (subchName != '' && subchName != null) {
      console.log(`%c  #### ${c}.${s} ${subchName}`, subStyle)
    }
    
  })
  
  
})