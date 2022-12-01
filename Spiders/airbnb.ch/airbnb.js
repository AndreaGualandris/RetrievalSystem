const puppeter = require("puppeteer")
const fs = require("fs")
const results = []

async function run() {
    const browser = await puppeter.launch({ headless: false })
    const page = await browser.newPage()

    let cities = ["Bergamo--BG", "Brescia--BS", "Como--CO", "Cremona--CR", "Lecco--LC", "Lodi--LO", "Mantova--MN", "Milano--MI", "Monza--MB", "Pavia--PV", "Sondrio--SO", "Varese--VA"]

    for (var j = 0; j < cities.length; j++) {
        await page.goto("https://www.airbnb.it/s/" + cities[j] + "/homes")}

        await page.waitForNavigation(2200)
        await page.waitForSelector(".bn2bl2p.dir.dir-ltr")  
        await page.waitForSelector("._1bfat5l") 

        for (var i = 0; i < 14; i++) { 
            await page.waitForSelector(".g1qv1ctd.cb4nyux.dir.dir-ltr")
            await page.waitForSelector(".t1jojoys.dir.dir-ltr") /
            await page.waitForSelector(".lwy0wad.l1tup9az.dir.dir-ltr")
            await page.waitForSelector("._tyxjp1")
            await page.waitForSelector(".t5eq1io.r4a59j5.dir.dir-ltr")

            const houses = await page.evaluate(() => {
                const elements = document.querySelectorAll(".g1qv1ctd.cb4nyux.dir.dir-ltr")
                let list = [];
                for (let element of elements) {
                    const title = element.querySelector(".t1jojoys.dir.dir-ltr").innerText
                    const type_host = element.children[2].innerText
                    const date = element.children[3].innerText
                    const price = element.querySelector("._tyxjp1").innerText
                    var rating = element.querySelector(".r1dxllyb.dir.dir-ltr")

                    if (rating != null)
                        rating = rating.innerText
                    else
                        rating = "no_rating"

                    let newHouse = { 'title': title, 'price_night': price.trim(), 'type_host': type_host, 'date': date, 'rating': rating }
                    list.push(newHouse)
                }
                return list
            })
            results.push(houses)
            await page.waitForSelector("._1bfat5l")
            await page.click("._1bfat5l")
        }


    // save in a file json the results results
    fs.writeFile("dataAirbnb/airbnbVA.json", JSON.stringify(results), function (err) {
        if (err) {
            console.log(err);
        }
    });

    await browser.close()
}


run()