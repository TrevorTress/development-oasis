const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
	const pageLinks = [];

	//initiate the browser
	const browser = await puppeteer.launch();

	//create a new in headless chrome
	const page = await browser.newPage();

	for (let i = 0; i < pageLinks.length; i++) {
		const link = pageLinks[i];

		//go to target website
		await page.goto(link, {
			//wait for content to load
			waitUntil: 'networkidle0',
		});

		//get full page html
		const html = await page.content();

		//store html content in the reactstorefront file
		await fs.writeFile(`reactstorefront${i}.html`, html);
	}

	//close headless chrome
	await browser.close();
})();
