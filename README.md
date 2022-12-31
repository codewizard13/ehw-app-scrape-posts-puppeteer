| INFO PROPERTY | VALUE                                          |
| ------------- | ---------------------------------------------- |
| Program Name  | **App: Scrape Blog Posts with Puppet** |
| File Name     | README.md                                      |
| Date Created  | 12/31/22                                       |
| Date Modified | --                                             |
| Version       | 0.0.1                                          |
| Programmer    | **Eric Hepperle**                              |

### TECHNOLOGIES

<img align="left" alt="JavaScript" title="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />

<img align="left" alt="Git" title="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />

<img align="left" alt="GitHub" title="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" style="padding-right:10px;" />

<br>

## TAGS
`JavaScript` `ES6` `Web Scraping` `Vanilla JavaScript` `Puppeteer`

## Purpose

Scrape blog post to CSV.

Here is some background on the origin of this repo:

**PROBLEM:** Client needs thousands of blog posts of their own content converted to modern PHP web CMS like WordPress. They aren't tech savvy and to copy-paste the data it would take too long by hand.

**ACTION:** This seems like a job for web scraping! If I can set a JavaScript timer so that the bot doesn't DDOS the client's server, this could be the best solution. I propose:

1) Build web scraper with Puppeteer and NodeJS to gather information needed. Each page crawl should be a few seconds apart. Start with a small test.

2) Convert scraped data to JSON

3) Write JSON to CSVs

4) Import CSVs to MySQL tables

**SOLUTION:** _TBD_


## Included Scripts

- [Scrape YouTube Video Details](scrape-youtube-vid-deets.js)
- [Scrape LinkedIn Course Details](scrape-linkedin-course-deets.js)
- [Scrape LinkedIn Course Chapter Outline](scrape-linkedin-chapters.js)

## Future Improvements (In Progress)

- 

### Materials/References

- [https://bytearcher.com/articles/es6-vs-es2015-name/](https://bytearcher.com/articles/es6-vs-es2015-name/)

### Sample Code from Tutorial

![Sample Code PLACEHOLDER]()

    
## Usage
1. Open YouTube video page (you can pause video or let it play)
2. Open developer console (F12)
3. Copy-paste JS code into browser console and run (hit enter)
    
## Sample Results: 

~~~
Tutorial Info:
- Title: Create a Live Highway Traffic Rotator using JavaScript - RSS / XML
- Full URL: https://www.youtube.com/watch?v=iPUnS49EomI
- Base URL: https://www.youtube.com/watch?v=iPUnS49EomI
- Channel: Awesome Open Source
- Channel URL: https://www.youtube.com/c/AwesomeOpenSource
- Avatar URL: https://yt3.ggpht.com/ytc/AKedOLRoYQU9YzUWgOceIRbwnjzsWP9V-ckmp4QC9wcq=s68-c-k-c0x00ffffff-no-rj
~~~

## Requires
* Browser opened to a YouTube video with developer console exposed.
    
## Demonstrates
* JavaScript
* ES6 / ECMAScript 2015
* Web Scraping / Web Scrapers
* Vanilla JavaScript
* YouTube Scraping

