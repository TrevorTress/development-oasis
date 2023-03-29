const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
	//initiate the browser / page
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// array of links to be scraped
	const pageLinks = ['https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/overview', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/login', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/appendix', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/training-docs', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/safety-overview', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/control-safety', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/safety-devices', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/equipment-lockout', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/energy-sources', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/safety/msds-info', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/equipment/equipment-overview', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/equipment/assemblies', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/equipment/electrical-panels', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/equipment/system-control', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/equipment/part-detect', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/maintenance-overview', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/maintenance-safety', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/preventive-maintenance', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/maintenance-lockout', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/oem-maintenance', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/maintenance-procedures', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/maintenance/machine-ledgers', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/troubleshoot-overview', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/mechanical-troubleshooting', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/electrical-troubleshooting', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/oem-troubleshooting', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/troubleshooting/hardware-troubleshooting', 'https://inovisionqrl.interactivetrainingsystems.com/smart-inspect/warren/drawings'];

	for (let i = 0; i < pageLinks.length; i++) {
		const link = pageLinks[i];

		//go to target website
		await page.goto(link);

		// await page.waitForSelector('h1');
		console.log(
			await page.$$eval('p', (vals) => {
				return [...vals].map((val) => {
					return val.innerHTML;
				});
			})
		);

		// //get full page html
		// await page.content()

		//store html content in the reactstorefront file
		// await fs.writeFile(`test${i}.md`, data);
	}

	//close headless chrome
	await browser.close();
})();
