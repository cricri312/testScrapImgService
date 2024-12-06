const { chromium } = require('playwright');

async function scrapeWebsite() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://draw3d.aneta-karol.pl/render3D/1');

    // Wait for the div with id 'imageBase64' to appear
    await page.waitForSelector('#imageBase64');

    // Extract the content of the div
    const divContent = await page.$eval('#imageBase64', div => div.textContent || div.innerHTML);

    console.log(divContent);

    await browser.close();
}

scrapeWebsite();
