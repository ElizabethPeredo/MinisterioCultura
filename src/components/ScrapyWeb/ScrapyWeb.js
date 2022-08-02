const puppeteer = require('puppeteer');

(async ()=>{
    const browser=await puppeteer.launch({headless: false});
    const page=await browser.newPage();

    await page.goto('https://ofi5.mef.gob.pe/ssi/Ssi/Indexm');

    await page.type('#txt_cod','2151618');
    await page.click('#d_inicio > div.col-xs-12.bkg_inicio > table > tbody > tr:nth-child(7) > td > span > img');

    /*await page.waitForSelector('[fil_detlm]');*/
    await page.evaluate(()=>{
        const element=document.querySelectorAll()

    });

    await page.waitForTimeout(3000);

    await page.screenshot({path: 'public/img/img4.jpg'})

    await browser.close();
})();