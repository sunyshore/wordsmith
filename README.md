# Wordsmith
With the help of our Chrome extension, you can get the pronunciation, synonyms, and antonyms of words with just one click!

## What It Does
Wordsmith is a Chrome extension that acts as a miniature dictionary for the user. The user will highlight a word and the Wordsmith icon will pop up for the user to click. Once the user clicks the icon, a small dictionary user interface will appear for the user. The interface includes:

* Pronunciation of the word
* If the word is a noun, adjective, or verb
* The definition of the word
* Synonyms and antonyms of the word

## Inspiration
All the members of our team come from many different cultural backgrounds. Thus, we have seen many people we know struggle to understand the text as they read, especially if English is not their primary language. Therefore, we were inspired to create Wordsmith to aid those with difficulties reading English, such as new English learners and those with disabilities.

## How we built it
- The scraping was done using beautiful soup and requests to scrape semantic data off dictionary.com
- FastAPI and Google Cloud platforms were used to create a Python server to host the main web scraper. The web scraper was also modified to provide better server functionality.
- The front-end user interface was created using HTML, CSS, and JavaScript to create a Chrome extension.

## About
Made for Hack the 6ix 2021 by Amy C., David C., Jagrit R., and Mercy D.<br>
Our team had no knowledge of scraping, server building, creating extensions and user interfaces prior to the hackathon. In the span of approximately 24 hours, we had learned everything needed to create our project.
* __Amy:__ I aided Mercy is developing the User Interface portion of our project. I also designed the initial look of the interface as well as created the video demo for the project.
* __David:__ I helped on the backend and frontend. I hosted the backend on the a Google Cloud server using FastAPI. First time doing backend and server stuff.
* __Jagrit:__ I worked on the backend of the extension. I coded the web scraping functionality using the requests and Beautiful Soup Python libraries to scrape semantic data about words. I also lended my voice to our submission video!
* __Mercy:__ I created the interface using HTML and CSS, and coded most of the extension part of the project. I used .json files and Bootstrap for the first time.<br>
We'd like to thank Lukas B. and a Hack the 6ix mentor, Henry, for their guidance.

## Demo Video
<div align="center">
  <a href="https://www.youtube.com/watch?v=jBviT8Y25p4"><img src="https://img.youtube.com/vi/jBviT8Y25p4/0.jpg" alt="Wordsmith Video Demo"></a>
</div>

## DevPost
[![Wordsmith Icon](/assets/images/image0.png "Wordsmith Icon")](https://devpost.com/software/deez-nuts-o4nbtd)