# Wordsmith
With the help of our Chrome extension, you can get the pronunciation, synonyms, and antonyms of words with just one click!

## What It Does
Wordsmith is a Chrome extension that acts as a miniature dictionary for the user. The user will highlight a word and the Wordsmith icon will pop up for the user to click. Once the user clicks the icon, a small dictionary user interface will appear for the user. The interface includes:

* Pronunciation of the word
* If the word is a noun, adjective, or verb
* The definition of the word
* Synonyms and antonyms of the word

## How to Use?
Highlight a word and click the extension.

## Inspiration
All the members of our team come from many different cultural backgrounds. Thus, we have seen many people we know struggle to understand the text as they read, especially if English is not their primary language. Therefore, we were inspired to create Wordsmith to aid those with difficulties reading English, such as new English learners and those with disabilities.

## How we built it
- The scraping was done using beautiful soup and requests to scrape semantic data off dictionary.com
- FastAPI and google cloud platforms were used to create a python server to host the main web scraper. The web scraper was also modified to provide better server functionality.
- The front-end user interface was created using HTML, CSS and javascript to create a chrome extension.

## About
Made for Hack the 6ix 2021 with Amy C., David C., and Jagrit R.<br>
We'd like to thank Lukas B. and another Henry from the Hack the 6ix team for their assistance.
