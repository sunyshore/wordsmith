const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const [el] = await page.$x('//*[@id="headword"]/div[1]/div/div/h1');
        const txt = await el.getProperty("textContent");
        const rawTxt = await txt.jsonValue();

        console.log({ rawTxt });

        browser.close();
        
    } catch (e) {
        console.log(e, "ERROR");
    }
}

word = "Hello";
scrapeProduct('https://www.thesaurus.com/browse/' + word);