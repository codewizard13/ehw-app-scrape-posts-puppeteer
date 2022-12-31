/*
Program Name:   LinkedIn Learning Course Page Info Grabber (Vanilla JS)
File Name:      ehCode_20220812_JS-ES6_ScrapeLLVidInfo.js
Date Created:   08/12/22
Date Modified:  --
Version:        0.0.1
Programmer:     Eric Hepperle

Purpose: Scrapes data from LinkedIn Learning video course page and prints
  to console using vanilla JavaScript ES6.
    
    This is useful for quickly grabbing enough information to make a link
    to a YouTube video and/or channel.

Usage: Cut and paste into developer console window (F12) of a YouTube
    video post. Vertical newline-separated list of data will output
    to console.

Sample results: 

    Tutorial Info:
    - Title: How to Create Photo Gallery Grid with Modal Window Lightbox
    - URL: https://www.youtube.com/watch?v=IPVQeVlw2_E
    - Channel: LearnWebCode

Requires:
    * Browser opened to a YouTube video.
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6
    * LinkedIn Learning

*/

console.clear();

/* VARIABLES */
var out = ''

var course_name = document.querySelector('.classroom-nav__details h1').innerText
var course_url = [document.location.origin, document.location.pathname].join('')
var platform = 'LinkedIn Learning'

// Instructor
var instructor = document.querySelector('.instructor .instructor__name').innerText
var instructor_tagline = document.querySelector('.instructor .instructor__headline').innerText
var instructor_url = document.querySelector('.instructor a').href
var instructor_avatar_url = document.querySelector('.instructor img').src

var course_deets_meta = document.querySelector('.classroom-workspace-overview__details-meta')

var course_descr = document.querySelector('.classroom-workspace-overview__description').innerHTML
var course_duration = course_deets_meta.querySelectorAll('li:first-of-type')[0].innerText
var course_level = course_deets_meta.querySelectorAll('li:nth-of-type(2)')[0].innerText
var course_release_date = course_deets_meta.querySelectorAll('li:nth-of-type(3)')[0].innerText

var skills = document.querySelectorAll('.classroom-workspace-overview__skills-list li')

var ex_files_btn = document.querySelectorAll('.classroom-workspace-overview__github-module-actions .artdeco-button__text')

// ------------------------

// Does exercise files button exist?
if (typeof (ex_files_btn) != 'undefined' && ex_files_btn != null) {
  out += "Exercise Files are available on GitHub\n"
} else {
  out += "Exercise Files MAY be available to download from this page\n"
}

out += "## COURSE INFO:\n\n";
out += "- Platform: " + platform + "\n";
out += "- Course Name: " + course_name + "\n";
out += "- Course URL: " + course_url + "\n";

out += "\n### Instructor\n\n"
out += "- Instructor Name: " + instructor + "\n";
out += "- Instructor Tagline: " + instructor_tagline + "\n";
out += "- Instructor URL: " + instructor_url + "\n";
out += "- Instructor Avatar URL: " + instructor_avatar_url + "\n";

out += "\n### Course Details\n\n"
out += "- Course Duration: " + course_duration + "\n";
out += "- Experience Level: " + course_level + "\n";
out += "- " + course_release_date + "\n";

out += "\n### Course Description:\n\n"
out += course_descr + "\n";

out += "\n### Skills Covered\n"

var tag_list = []
var tag_links_arr = []
var tag_links_str = ''

var tag_text_arr = []
var tag_text_str = ''

skills.forEach((el) => {
  link = el.querySelector('a')
  // new_link = `${link.innerText} | ${link.href}`
  new_link = [link.innerText, link.href] // array
  tag_list.push(new_link)
})

// Process Tag List array
tag_list.forEach((set) => {
  tag_links_arr.push(`[[${set[0]}](${set[1]})]`)
  tag_text_arr.push(`\`${set[0]}\``)
})

out += "\nTag String Links: " + tag_links_arr.join(' ') + "\n"

out += "\nTag String Text: " + tag_text_arr.join(' ')

console.log(out)